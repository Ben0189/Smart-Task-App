'use client';
import { CalendarDays, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

// Menu items for authenticated users.
const authenticatedItems = [
  {
    title: "Today",
    url: "today",
    icon: CalendarDays,
  },
  {
    title: "Task List",
    url: "task-list",
    icon: Inbox,
  },
  {
    title: "Monthly Stats",
    url: "monthly-stats",
    icon: Search,
  },
  {
    title: "Test Connection",
    url: "test-connection",
    icon: Settings,
  },
];

// Menu items for guests.
const guestItems = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
];

// Placeholder menu items during loading.
const loadingItems = [
  {
    title: "Loading...",
    url: "#",
    icon: Home, // You can replace this with a skeleton icon or spinner
  },
];

export function AppSidebar() {
  const { data: session, status } = useSession();

  // Determine which items to show based on session status
  const items =
    status === "loading"
      ? loadingItems // Placeholder items while session is loading
      : session
      ? authenticatedItems
      : guestItems;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Blotz Task App</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {session ? (
              <SidebarMenuButton asChild>
                <a href="/api/auth/signout">
                  <span>Sign Out</span>
                </a>
              </SidebarMenuButton>
            ) : (
              <SidebarMenuButton asChild>
                <a href="/signin">
                  <span>Sign In</span>
                </a>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
