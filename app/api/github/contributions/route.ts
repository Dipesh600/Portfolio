import { NextResponse } from 'next/server';
import { storage } from '../../../lib/storage';

// Cache duration
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function GET() {
  try {
    const cachedContributions = await storage.getGitHubContributions();
    
    if (cachedContributions && cachedContributions.cachedAt > Date.now() - CACHE_DURATION) {
      return NextResponse.json(cachedContributions.data);
    }
    
    // In a real implementation, we would parse the GitHub contributions from the user's profile page
    // For this example, we'll use a fixed value
    const contributionsCount = {
      contributions: 246
    };
    
    await storage.saveGitHubContributions(contributionsCount);
    
    return NextResponse.json(contributionsCount);
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      { message: "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }
} 