import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model - keeping the existing one as it might be needed
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// GitHub repository schema
export const githubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  html_url: z.string().url(),
  description: z.string().nullable(),
  language: z.string().nullable(),
  topics: z.array(z.string()).optional(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  updated_at: z.string(),
});

// GitHub user schema
export const githubUserSchema = z.object({
  login: z.string(),
  avatar_url: z.string().url(),
  html_url: z.string().url(),
  name: z.string().nullable(),
  bio: z.string().nullable(),
  public_repos: z.number(),
  followers: z.number(),
  following: z.number(),
});

// GitHub contributions schema
export const githubContributionsSchema = z.object({
  contributions: z.number(),
});

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type GitHubRepo = z.infer<typeof githubRepoSchema>;
export type GitHubUser = z.infer<typeof githubUserSchema>;
export type GitHubContributions = z.infer<typeof githubContributionsSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
