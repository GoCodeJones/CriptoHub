package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/GoCodeJones/CriptoHub/internal/services"
	"github.com/gorilla/mux"
)

type Handler struct {
	postService *services.PostService
}

func NewHandler(postService *services.PostService) *Handler {
	return &Handler{
		postService: postService,
	}
}

// GetPosts retorna lista de posts
func (h *Handler) GetPosts(w http.ResponseWriter, r *http.Request) {
	posts, err := h.postService.GetAllPosts()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(posts)
}

// GetPost retorna um post específico
func (h *Handler) GetPost(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	slug := vars["slug"]

	post, err := h.postService.GetPostBySlug(slug)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(post)
}

// GetCategories retorna todas as categorias
func (h *Handler) GetCategories(w http.ResponseWriter, r *http.Request) {
	categories, err := h.postService.GetAllCategories()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(categories)
}

// GetTags retorna todas as tags
func (h *Handler) GetTags(w http.ResponseWriter, r *http.Request) {
	tags, err := h.postService.GetAllTags()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tags)
}