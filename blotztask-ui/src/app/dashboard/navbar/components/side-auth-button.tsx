'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { NavUser, User } from './nav-user';
import { fetchCurrentUserInfo } from '@/services/userInfoService';


export function SidebarAuthButton({ session, onSignOut }) {
  const [userInfo, setUserInfo] = useState<User>();

  const loadUserInfo = async () => {
    const result = await fetchCurrentUserInfo();
    setUserInfo({
      name: result.data.username,
      email: result.data.email,
      avatar: '../../../assets/images/profileImage.png',
    });
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <SidebarMenuItem>
      {session ? (
        userInfo && <NavUser user={userInfo} onSignOut={onSignOut} />
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
