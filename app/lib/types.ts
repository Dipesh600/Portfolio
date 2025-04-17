// Import existing types from shared schema
import type { 
  GitHubRepo as IGitHubRepo, 
  GitHubUser as IGitHubUser,
  GitHubContributions as IGitHubContributions,
  ContactForm as IContactForm
} from "@shared/schema";

// Export the types for use in the frontend
export type GitHubRepo = IGitHubRepo;
export type GitHubUser = IGitHubUser;
export type GitHubContributions = IGitHubContributions;
export type ContactForm = IContactForm;
