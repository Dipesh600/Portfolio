import { NextResponse } from 'next/server';
import axios from 'axios';
import { storage } from '@/lib/storage';

// GitHub API configuration
const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_USERNAME = "aryanaditya2003";
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function GET() {
  try {
    const cachedData = await storage.getGitHubUser();
    
    if (cachedData && cachedData.cachedAt > Date.now() - CACHE_DURATION) {
      return NextResponse.json(cachedData.data);
    }
    
    const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
    const userData = response.data;
    
    await storage.saveGitHubUser(userData);
    
    return NextResponse.json(userData);
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    return NextResponse.json(
      { message: "Failed to fetch GitHub user data" },
      { status: 500 }
    );
  }
} 