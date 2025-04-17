"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Star, GitFork, RefreshCw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import type { GitHubRepo, GitHubUser, GitHubContributions } from "@/lib/types";

export default function GitHubSection() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  
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
      
      setLastUpdated(new Date());
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-poppins font-semibold">GitHub Activity</h2>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-neutral-600 text-sm mr-4">
              Last updated: {lastUpdated.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: true 
              }).toUpperCase()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={refreshGitHubData}
              disabled={isRefreshing}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        
        <div className="mt-12">
          <h3 className="text-xl font-poppins font-semibold mb-6">Recent Repositories</h3>
          
          {isLoading ? (
            <div className="space-y-4">
              <RepoSkeleton />
              <RepoSkeleton />
              <RepoSkeleton />
            </div>
          ) : hasError ? (
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-neutral-700">Failed to load GitHub repositories.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {repos && Array.isArray(repos) ? repos.map((repo: GitHubRepo) => (
                <Repository key={repo.id} repo={repo} />
              )) : (
                <p className="text-center text-neutral-700">No repositories found.</p>
              )}
              
              <div className="text-center mt-8">
                <Button 
                  asChild
                  className="bg-primary text-white px-6 py-3 rounded-md font-poppins font-semibold transition-all hover:bg-primary/90"
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
    <div className="bg-neutral-100 p-6 rounded-lg shadow-md text-center">
      {isLoading ? (
        <div className="flex flex-col items-center">
          <Skeleton className="h-10 w-16 mb-2 rounded-md" />
          <Skeleton className="h-6 w-24 rounded-md" />
        </div>
      ) : (
        <>
          <div className="text-3xl font-poppins font-bold text-primary mb-2">{value || 0}</div>
          <p className="text-neutral-700">{title}</p>
        </>
      )}
    </div>
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
    <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-poppins font-semibold text-primary hover:underline"
          >
            {repo.name}
          </a>
          <p className="text-neutral-700 mt-2">
            {repo.description || "No description provided"}
          </p>
          
          <div className="flex mt-4 flex-wrap">
            {getTopics(repo).map((topic, index) => (
              <span 
                key={index} 
                className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-neutral-700">{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center">
            <GitFork className="h-4 w-4 text-neutral-700 mr-1" />
            <span className="text-neutral-700">{repo.forks_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RepoSkeleton() {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6">
      <div className="flex justify-between">
        <div className="w-3/4">
          <Skeleton className="h-6 w-48 mb-4 rounded-md" />
          <Skeleton className="h-4 w-full mb-2 rounded-md" />
          <Skeleton className="h-4 w-2/3 mb-6 rounded-md" />
          
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-full" />
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Skeleton className="h-6 w-12 rounded-md" />
          <Skeleton className="h-6 w-12 rounded-md" />
        </div>
      </div>
    </div>
  );
}
