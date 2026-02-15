package services

import (
	"bytes"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"github.com/GoCodeJones/CriptoHub/internal/models"
	"gopkg.in/yaml.v3"
)

type PostService struct {
	contentDir string
}

func NewPostService(contentDir string) *PostService {
	return &PostService{
		contentDir: contentDir,
	}
}

// GetAllPosts retorna todos os posts ordenados por data (mais recentes primeiro)
func (s *PostService) GetAllPosts() ([]models.PostSummary, error) {
	files, err := filepath.Glob(filepath.Join(s.contentDir, "*.mdx"))
	if err != nil {
		return nil, err
	}

	var summaries []models.PostSummary
	for _, file := range files {
		post, err := s.parsePost(file)
		if err != nil {
			continue
		}

		summaries = append(summaries, models.PostSummary{
			Title:      post.Title,
			Slug:       post.Slug,
			Date:       post.Date,
			Categories: post.Categories,
			Tags:       post.Tags,
			Excerpt:    post.Excerpt,
		})
	}

	sort.Slice(summaries, func(i, j int) bool {
		return summaries[i].Date.After(summaries[j].Date)
	})

	return summaries, nil
}

// GetPostBySlug retorna um post específico pelo slug
func (s *PostService) GetPostBySlug(slug string) (*models.Post, error) {
	files, err := filepath.Glob(filepath.Join(s.contentDir, "*.mdx"))
	if err != nil {
		return nil, err
	}

	for _, file := range files {
		post, err := s.parsePost(file)
		if err != nil {
			continue
		}
		if post.Slug == slug {
			return post, nil
		}
	}

	return nil, fmt.Errorf("post não encontrado: %s", slug)
}

// GetAllCategories retorna todas as categorias únicas
func (s *PostService) GetAllCategories() ([]string, error) {
	posts, err := s.GetAllPosts()
	if err != nil {
		return nil, err
	}

	categoryMap := make(map[string]bool)
	for _, post := range posts {
		for _, cat := range post.Categories {
			categoryMap[cat] = true
		}
	}

	var categories []string
	for cat := range categoryMap {
		categories = append(categories, cat)
	}
	sort.Strings(categories)

	return categories, nil
}

// GetAllTags retorna todas as tags únicas
func (s *PostService) GetAllTags() ([]string, error) {
	posts, err := s.GetAllPosts()
	if err != nil {
		return nil, err
	}

	tagMap := make(map[string]bool)
	for _, post := range posts {
		for _, tag := range post.Tags {
			tagMap[tag] = true
		}
	}

	var tags []string
	for tag := range tagMap {
		tags = append(tags, tag)
	}
	sort.Strings(tags)

	return tags, nil
}

// parsePost lê e faz parse de um arquivo MDX
func (s *PostService) parsePost(filename string) (*models.Post, error) {
	content, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	parts := bytes.SplitN(content, []byte("---"), 3)
	if len(parts) < 3 {
		return nil, fmt.Errorf("formato MDX inválido: %s", filename)
	}

	var post models.Post
	if err := yaml.Unmarshal(parts[1], &post); err != nil {
		return nil, err
	}

	post.Content = strings.TrimSpace(string(parts[2]))

	if len(post.Content) > 200 {
		post.Excerpt = post.Content[:200] + "..."
	} else {
		post.Excerpt = post.Content
	}

	return &post, nil
}