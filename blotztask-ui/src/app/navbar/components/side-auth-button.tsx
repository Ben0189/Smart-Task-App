'use client';

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export function SidebarAuthButton({ session, onSignOut }) {
  return (
    <SidebarMenuItem>
      {session ? (
        <SidebarMenuButton asChild>
          <a href="#" onClick={onSignOut}>
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
  );
}
