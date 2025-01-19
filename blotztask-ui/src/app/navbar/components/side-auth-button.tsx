'use client';

import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { NavUser } from './nav-user';

const mockusers = 
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    avatar: "../../../assets/images/profileImage.png"
  }

export function SidebarAuthButton({ session, onSignOut }) {

  return (
    <SidebarMenuItem>
      {session ? (
        <NavUser user={mockusers} onSignOut={onSignOut}/>
        // <SidebarMenuButton asChild className="bg-primary text-white">
        //   <a href="#" onClick={onSignOut}>
        //     <span>Sign Out</span>
        //   </a>
        // </SidebarMenuButton>
      ) : (
        <SidebarMenuButton asChild className="bg-primary text-white">
          <a href="/signin">
            <span>Sign In</span>
          </a>
        </SidebarMenuButton>
      )}
    </SidebarMenuItem>
  );
}
