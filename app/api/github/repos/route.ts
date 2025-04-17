import { NextResponse } from 'next/server';
import axios from 'axios';
import { storage } from '@/lib/storage';

// GitHub API configuration
const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_USERNAME = "aryanaditya2003";
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function GET() {
  try {
    const cachedRepos = await storage.getGitHubRepos();
    
    if (cachedRepos && cachedRepos.cachedAt > Date.now() - CACHE_DURATION) {
      return NextResponse.json(cachedRepos.data);
    }
    
    const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: "updated",
        per_page: 10
      }
    });
    
    const reposData = response.data;
    
    await storage.saveGitHubRepos(reposData);
    
    return NextResponse.json(reposData);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return NextResponse.json(
      { message: "Failed to fetch GitHub repositories" },
      { status: 500 }
    );
  }
} 