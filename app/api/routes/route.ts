import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "../../lib/storage";
import axios from "axios";
import { GitHubRepo, contactFormSchema } from "../../../shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

// GitHub API configuration
const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_USERNAME = "aryanaditya2003";
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function registerRoutes(app: Express): Promise<Server> {
  // All routes are prefixed with /api
  
  // GitHub API routes
  app.get("/api/github/user", async (req: Request, res: Response) => {
    try {
      const cachedData = await storage.getGitHubUser();
      
      if (cachedData && cachedData.cachedAt > Date.now() - CACHE_DURATION) {
        return res.json(cachedData.data);
      }
      
      const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
      const userData = response.data;
      
      await storage.saveGitHubUser(userData);
      
      res.json(userData);
    } catch (error) {
      console.error("Error fetching GitHub user data:", error);
      res.status(500).json({ message: "Failed to fetch GitHub user data" });
    }
  });
  
  app.get("/api/github/repos", async (req: Request, res: Response) => {
    try {
      const cachedRepos = await storage.getGitHubRepos();
      
      if (cachedRepos && cachedRepos.cachedAt > Date.now() - CACHE_DURATION) {
        return res.json(cachedRepos.data);
      }
      
      const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`, {
        params: {
          sort: "updated",
          per_page: 10
        }
      });
      
      const reposData: GitHubRepo[] = response.data;
      
      await storage.saveGitHubRepos(reposData);
      
      res.json(reposData);
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      res.status(500).json({ message: "Failed to fetch GitHub repositories" });
    }
  });
  
  app.get("/api/github/contributions", async (req: Request, res: Response) => {
    try {
      const cachedContributions = await storage.getGitHubContributions();
      
      if (cachedContributions && cachedContributions.cachedAt > Date.now() - CACHE_DURATION) {
        return res.json(cachedContributions.data);
      }
      
      // In real production, we would parse the GitHub contributions from the user's profile page
      // Since this requires HTML scraping which is complex for this example, we'll simulate it
      // with a reasonable approximation based on their activity
      
      // For a real implementation, we would use something like cheerio to parse GitHub's contribution graph
      
      const contributionsCount = {
        contributions: 246 // This would be dynamically calculated in production
      };
      
      await storage.saveGitHubContributions(contributionsCount);
      
      res.json(contributionsCount);
    } catch (error) {
      console.error("Error fetching GitHub contributions:", error);
      res.status(500).json({ message: "Failed to fetch GitHub contributions" });
    }
  });
  
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, we'd send an email or store the contact form submission
      // For this example, we'll just acknowledge receipt
      
      res.status(200).json({ 
        message: "Message received! Thank you for your submission.", 
        data: validatedData 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Failed to process your request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
