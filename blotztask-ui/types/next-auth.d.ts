//THIS FILE IS USED TO ADD CUSTOM PROPERTIES TO THE USER OBJECT IN NEXT-AUTH

// types/next-auth.d.ts
/* eslint-disable no-unused-vars */

import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    access_token?: string;
    refresh_token?: string;
  }

  interface Account {
    access_token?: string;
    refresh_token?: string;
  }
}
