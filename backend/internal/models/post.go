package models

import "time"

// Post representa um artigo do blog
type Post struct {
	Title      string    `yaml:"title" json:"title"`
	Slug       string    `yaml:"slug" json:"slug"`
	Date       time.Time `yaml:"date" json:"date"`
	Categories []string  `yaml:"categories" json:"categories"`
	Tags       []string  `yaml:"tags" json:"tags"`
	Content    string    `json:"content"`
	Excerpt    string    `json:"excerpt,omitempty"`
}

// PostSummary representa um resumo do post (para listagens)
type PostSummary struct {
	Title      string    `json:"title"`
	Slug       string    `json:"slug"`
	Date       time.Time `json:"date"`
	Categories []string  `json:"categories"`
	Tags       []string  `json:"tags"`
	Excerpt    string    `json:"excerpt"`
}