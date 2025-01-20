import React from 'react';
import { AppSidebar } from '../navbar/side-nav';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
       <SidebarProvider> 
        <AppSidebar />
        <div className="flex-1 flex flex-col">
            <header className="flex justify-between items-center p-4 border-b">
            <SidebarTrigger />
            </header>
            <main className="container mx-auto px-6 py-4 flex-1">
            {children}
            </main>
        </div>
      </SidebarProvider> 
    </div>
  );
};

export default DashboardLayout;
