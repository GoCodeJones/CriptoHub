package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Article struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	URL         string `json:"url"`
	ImageURL    string `json:"image_url"`
}

type Video struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	YouTubeURL  string `json:"youtube_url"`
	Thumbnail   string `json:"thumbnail"`
}

type Document struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
}

func main() {
	r := gin.Default()

	// CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowCredentials: true,
	}))

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})

	// Endpoints
	r.GET("/api/videos", getVideos)
	r.GET("/api/articles", getArticles)
	r.GET("/api/documents", getDocuments)

	r.Run(":8080")
}

func getVideos(c *gin.Context) {
	videos := []Video{
		{
			ID:         "1",
			Title:      "Introdução ao Bitcoin",
			YouTubeURL: "PLACEHOLDER_YOUTUBE_URL_1",
			Thumbnail:  "PLACEHOLDER_THUMBNAIL_1",
		},
		{
			ID:         "2",
			Title:      "Como funciona a Blockchain",
			YouTubeURL: "PLACEHOLDER_YOUTUBE_URL_2",
			Thumbnail:  "PLACEHOLDER_THUMBNAIL_2",
		},
		{
			ID:         "3",
			Title:      "Carteiras Cripto: Guia Completo",
			YouTubeURL: "PLACEHOLDER_YOUTUBE_URL_3",
			Thumbnail:  "PLACEHOLDER_THUMBNAIL_3",
		},
	}

	c.JSON(http.StatusOK, videos)
}

func getArticles(c *gin.Context) {
	articles := []Article{
		{
			ID:          "1",
			Title:       "O que é Bitcoin?",
			Description: "Entenda os fundamentos da primeira criptomoeda descentralizada do mundo.",
			URL:         "PLACEHOLDER_ARTICLE_URL_1",
			ImageURL:    "PLACEHOLDER_IMAGE_1",
		},
		{
			ID:          "2",
			Title:       "Proof of Work vs Proof of Stake",
			Description: "Comparação entre os principais mecanismos de consenso.",
			URL:         "PLACEHOLDER_ARTICLE_URL_2",
			ImageURL:    "PLACEHOLDER_IMAGE_2",
		},
		{
			ID:          "3",
			Title:       "Segurança em Criptomoedas",
			Description: "Melhores práticas para proteger seus ativos digitais.",
			URL:         "PLACEHOLDER_ARTICLE_URL_3",
			ImageURL:    "PLACEHOLDER_IMAGE_3",
		},
	}

	c.JSON(http.StatusOK, articles)
}

func getDocuments(c *gin.Context) {
	documents := []Document{
		{
			ID:          "1",
			Title:       "O que é Bitcoin",
			Slug:        "o-que-e-bitcoin",
			Description: "Guia completo sobre Bitcoin, sua história e funcionamento.",
		},
		{
			ID:          "2",
			Title:       "Ethereum Explicado",
			Slug:        "ethereum-explicado",
			Description: "Entenda a plataforma de contratos inteligentes.",
		},
		{
			ID:          "3",
			Title:       "DeFi: Finanças Descentralizadas",
			Slug:        "defi-financas-descentralizadas",
			Description: "O futuro das finanças sem intermediários.",
		},
	}

	c.JSON(http.StatusOK, documents)
}