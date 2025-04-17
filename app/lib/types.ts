// Import existing types from shared schema
import {
  type ContactForm as IContactForm,
  type GitHubRepo as IGitHubRepo,
  type GitHubUser as IGitHubUser,
  type GitHubContributions as IGitHubContributions
} from "../../shared/schema";

// Export the types for use in the frontend
export type GitHubRepo = IGitHubRepo;
export type GitHubUser = IGitHubUser;
export type GitHubContributions = IGitHubContributions;
export type ContactForm = IContactForm;
