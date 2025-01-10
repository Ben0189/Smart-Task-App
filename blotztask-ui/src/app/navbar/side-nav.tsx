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
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { SidebarAuthButton } from "./components/side-auth-button";

const authenticatedItems = [
  { title: "Today", url: "today", icon: CalendarDays },
  { title: "Task List", url: "task-list", icon: Inbox },
  { title: "Monthly Stats", url: "monthly-stats", icon: Search },
  { title: "Test Connection", url: "test-connection", icon: Settings },
];

const guestItems = [{ title: "Home", url: "/home", icon: Home }];

const loadingItems = [{ title: "Loading...", url: "#", icon: Home }];

export function AppSidebar() {
  const { data: session, status } = useSession();

  const handleSignOut = (e) => {
    e.preventDefault();
    window.location.href = "/api/auth/signout";
  };

  // Determine which items to show based on session status
  const items =
    status === "loading" ? loadingItems : session ? authenticatedItems : guestItems;

    const taskCategories = [
      { name: "Personal", color: "bg-yellow-500" },
      { name: "Academic", color: "bg-cyan-500" },
      { name: "Others", color: "bg-blue-500" },
      { name: "Work", color: "bg-purple-500" },
    ];

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
//change here
        <SidebarGroup>
          <SidebarGroupLabel>Task Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <ul className="space-y-2">
              {taskCategories.map((category, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span
                    className={`h-4 w-4 rounded-full ${category.color}`}
                    aria-hidden="true"
                  ></span>
                  <span className="text-gray-700">{category.name}</span>
                </li>
              ))}
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
//end change
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarAuthButton session={session} onSignOut={handleSignOut} />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
