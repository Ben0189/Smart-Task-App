import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Provider from './provider';
import { Toaster } from '@/components/ui/sonner';
// import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
// import { AppSidebar } from './navbar/side-nav';
// import AuthButton from '@/components/auth-button';

export const metadata: Metadata = {
  title: 'Blotz Task App',
  description: 'Efficiently organize and track users tasks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans antialiased h-screen')}>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {/* <SidebarProvider>
              <AppSidebar />
              <div className="w-full">
                <div className="flex justify-between">
                  <SidebarTrigger />
                  <AuthButton />
                </div>
                <section className="container mx-auto px-12 pt-8 h-5/6">{children}</section>  
              </div>
            </SidebarProvider> */}
            <p>Testing</p>
            <Toaster />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
