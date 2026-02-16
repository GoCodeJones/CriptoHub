import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Materials from "./pages/Materials";
import Docs from "./pages/Docs";
import DocArticle from "./pages/DocArticle";
import FAQ from "./pages/FAQ";
import Contribute from "./pages/Contribute";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/:slug" element={<DocArticle />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/project" element={<Project />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
