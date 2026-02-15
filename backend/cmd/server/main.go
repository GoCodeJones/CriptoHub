package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/GoCodeJones/CriptoHub/internal/handlers"
	"github.com/GoCodeJones/CriptoHub/internal/services"
	"github.com/gorilla/mux"
)

func main() {
	// Diretório de conteúdo
	contentDir := os.Getenv("CONTENT_DIR")
	if contentDir == "" {
		contentDir = "../content/posts"
	}

	// Porta do servidor
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Inicializa serviços
	postService := services.NewPostService(contentDir)
	handler := handlers.NewHandler(postService)

	// Setup router
	r := mux.NewRouter()

	// Middleware CORS
	r.Use(corsMiddleware)

	// Rotas da API
	api := r.PathPrefix("/api").Subrouter()
	api.HandleFunc("/posts", handler.GetPosts).Methods("GET")
	api.HandleFunc("/posts/{slug}", handler.GetPost).Methods("GET")
	api.HandleFunc("/categories", handler.GetCategories).Methods("GET")
	api.HandleFunc("/tags", handler.GetTags).Methods("GET")

	// Health check
	r.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	}).Methods("GET")

	// Inicia servidor
	addr := fmt.Sprintf(":%s", port)
	log.Printf("Servidor rodando em http://localhost%s", addr)
	log.Printf("Lendo conteúdo de: %s", contentDir)
	log.Fatal(http.ListenAndServe(addr, r))
}

// corsMiddleware adiciona headers CORS
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}