"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Star, GitFork, RefreshCw } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import { useEffect, useState } from "react";
import type { GitHubRepo, GitHubUser, GitHubContributions } from "../lib/types";

export default function GitHubSection() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    setLastUpdated(new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true 
    }).toUpperCase());
  }, []);
  
  // Auto-refresh GitHub data every 5 minutes
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshGitHubData();
    }, 5 * 60 * 1000); // 5 minutes
    
    return () => clearInterval(refreshInterval);
  }, []);
  
  // Function to manually refresh GitHub data
  const refreshGitHubData = async () => {
    if (isRefreshing) return;
    
    setIsRefreshing(true);
    try {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['github-user'] }),
        queryClient.invalidateQueries({ queryKey: ['github-repos'] }),
        queryClient.invalidateQueries({ queryKey: ['github-contributions'] })
      ]);
      
      setLastUpdated(new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
      }).toUpperCase());
      
      toast({
        title: "Data refreshed",
        description: "GitHub data has been updated successfully.",
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Refresh failed",
        description: "Could not refresh GitHub data. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  const { 
    data: userData, 
    isLoading: isUserLoading, 
    error: userError 
  } = useQuery<GitHubUser>({
    queryKey: ['github-user'],
    queryFn: async () => {
      const response = await fetch('/api/github/user');
      if (!response.ok) throw new Error('Failed to fetch user data');
      return response.json();
    }
  });

  const { 
    data: repos, 
    isLoading: isReposLoading, 
    error: reposError 
  } = useQuery<GitHubRepo[]>({
    queryKey: ['github-repos'],
    queryFn: async () => {
      const response = await fetch('/api/github/repos');
      if (!response.ok) throw new Error('Failed to fetch repos');
      return response.json();
    }
  });

  const {
    data: contributions,
    isLoading: isContributionsLoading,
    error: contributionsError
  } = useQuery<GitHubContributions>({
    queryKey: ['github-contributions'],
    queryFn: async () => {
      const response = await fetch('/api/github/contributions');
      if (!response.ok) throw new Error('Failed to fetch contributions');
      return response.json();
    }
  });

  const isLoading = isUserLoading || isReposLoading || isContributionsLoading;
  const hasError = userError || reposError || contributionsError;

  return (
    <section id="github" className="py-16 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-[#58a6ff] to-[#58a6ff]/50 bg-clip-text text-transparent">
            GitHub Activity
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mt-4 md:mt-0">
            {mounted && (
              <span className="text-[#8b949e] text-sm mr-4">
                Last updated: {lastUpdated}
              </span>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={refreshGitHubData}
              disabled={isRefreshing}
              className="flex items-center gap-2 border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:text-[#c9d1d9]"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard 
            title="Repositories" 
            value={userData?.public_repos} 
            isLoading={isUserLoading} 
          />
          
          <StatCard 
            title="Contributions" 
            value={contributions?.contributions} 
            isLoading={isContributionsLoading} 
          />
          
          <StatCard 
            title="Followers" 
            value={userData?.followers} 
            isLoading={isUserLoading} 
          />
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-poppins font-semibold text-[#c9d1d9] mb-6">Recent Repositories</h3>
          
          {isLoading ? (
            <div className="space-y-4">
              <RepoSkeleton />
              <RepoSkeleton />
              <RepoSkeleton />
            </div>
          ) : hasError ? (
            <Card className="bg-[#161b22] border-[#30363d]">
              <CardContent className="p-6">
                <p className="text-center text-[#8b949e]">Failed to load GitHub repositories.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {repos && Array.isArray(repos) ? repos.slice(0, 3).map((repo: GitHubRepo) => (
                <Repository key={repo.id} repo={repo} />
              )) : (
                <p className="text-center text-[#8b949e]">No repositories found.</p>
              )}
              
              <div className="text-center mt-8">
                <Button 
                  asChild
                  variant="outline"
                  className="border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff]/10 hover:text-[#58a6ff]"
                >
                  <a 
                    href="https://github.com/aryanaditya2003" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View All Repositories
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  title: string;
  value?: number;
  isLoading: boolean;
}

function StatCard({ title, value, isLoading }: StatCardProps) {
  return (
    <Card className="bg-[#161b22] border-[#30363d]">
      <CardContent className="p-6">
        <h4 className="text-lg font-poppins font-semibold text-[#c9d1d9] mb-2">{title}</h4>
        {isLoading ? (
          <Skeleton className="h-8 w-20 bg-[#30363d]" />
        ) : (
          <p className="text-3xl font-bold text-[#58a6ff]">{value || 0}</p>
        )}
      </CardContent>
    </Card>
  );
}

function Repository({ repo }: { repo: GitHubRepo }) {
  // Function to get an array of languages or topics from the repo
  const getTopics = (repo: GitHubRepo): string[] => {
    if (repo.topics && repo.topics.length > 0) {
      return repo.topics.slice(0, 3);
    }
    
    // If no topics, use language as a fallback
    return repo.language ? [repo.language] : ['Other'];
  };
  
  return (
    <Card className="bg-[#161b22] border-[#30363d] hover:border-[#8b949e] transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <a 
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-poppins font-semibold text-[#58a6ff] hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-[#8b949e] mt-1">{repo.description}</p>
          </div>
          
          <div className="flex items-center gap-4">
            {repo.language && (
              <span className="text-sm text-[#8b949e] flex items-center">
                <span className="w-3 h-3 rounded-full bg-[#238636] mr-2"></span>
                {repo.language}
              </span>
            )}
            
            <div className="flex items-center gap-3">
              <span className="flex items-center text-sm text-[#8b949e]">
                <Star className="h-4 w-4 mr-1 text-[#8b949e]" />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center text-sm text-[#8b949e]">
                <GitFork className="h-4 w-4 mr-1 text-[#8b949e]" />
                {repo.forks_count}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RepoSkeleton() {
  return (
    <Card className="bg-[#161b22] border-[#30363d]">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Skeleton className="h-6 w-48 bg-[#30363d]" />
          <Skeleton className="h-4 w-full bg-[#30363d]" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-20 bg-[#30363d]" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-16 bg-[#30363d]" />
              <Skeleton className="h-4 w-16 bg-[#30363d]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
