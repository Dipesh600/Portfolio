import { users, type User, type InsertUser, GitHubRepo, GitHubUser, GitHubContributions } from "@shared/schema";

// Interface for cached data
interface CachedData<T> {
  data: T;
  cachedAt: number;
}

export interface IStorage {
  // Original user methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // GitHub data methods
  getGitHubUser(): Promise<CachedData<GitHubUser> | undefined>;
  saveGitHubUser(user: GitHubUser): Promise<void>;
  
  getGitHubRepos(): Promise<CachedData<GitHubRepo[]> | undefined>;
  saveGitHubRepos(repos: GitHubRepo[]): Promise<void>;
  
  getGitHubContributions(): Promise<CachedData<GitHubContributions> | undefined>;
  saveGitHubContributions(contributions: GitHubContributions): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private githubUser?: CachedData<GitHubUser>;
  private githubRepos?: CachedData<GitHubRepo[]>;
  private githubContributions?: CachedData<GitHubContributions>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  // Original user methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // GitHub user methods
  async getGitHubUser(): Promise<CachedData<GitHubUser> | undefined> {
    return this.githubUser;
  }
  
  async saveGitHubUser(user: GitHubUser): Promise<void> {
    this.githubUser = {
      data: user,
      cachedAt: Date.now()
    };
  }
  
  // GitHub repos methods
  async getGitHubRepos(): Promise<CachedData<GitHubRepo[]> | undefined> {
    return this.githubRepos;
  }
  
  async saveGitHubRepos(repos: GitHubRepo[]): Promise<void> {
    this.githubRepos = {
      data: repos,
      cachedAt: Date.now()
    };
  }
  
  // GitHub contributions methods
  async getGitHubContributions(): Promise<CachedData<GitHubContributions> | undefined> {
    return this.githubContributions;
  }
  
  async saveGitHubContributions(contributions: GitHubContributions): Promise<void> {
    this.githubContributions = {
      data: contributions,
      cachedAt: Date.now()
    };
  }
}

export const storage = new MemStorage();
