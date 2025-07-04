'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/toaster';
import { queryClient } from './lib/queryClient';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="portfolio-theme"
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
} 