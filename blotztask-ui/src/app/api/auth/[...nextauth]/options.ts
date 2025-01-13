import { fetchWithErrorHandling } from '@/utils/http-client';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';

interface Credentials {
  email: string;
  password: string;
}

interface LoginApiResponse {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'your email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials: Credentials) {
        const { email, password } = credentials;

        try {
          //TODO : Remove reject unauthorized set to false
          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
          }
          //TODO :Also fix the fetch url for login in prod
          const response = await fetchWithErrorHandling<LoginApiResponse>(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/login/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            }
          );

          cookies().set('authToken', response.accessToken, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });

          if (response.accessToken) {
            return {
              id: email || 'placeholder-id',
              email: email,
              accessToken: response.accessToken, // Include the access token here
              refreshToken: response.refreshToken,
              expiresIn: response.expiresIn,
            };
          } else {
            console.error('Access token not found in response');
            return null;
          }
        } catch (error) {
          console.error('Login Failed:', error instanceof Error ? error.message : JSON.stringify(error));
          return null; //return null as per https://next-auth.js.org/configuration/providers/credentials
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (user?.access_token) {
        account.access_token = user?.access_token as string;
      }
      if (user?.refresh_token) {
        account.refresh_token = user?.refresh_token as string;
      }

      return true;
    },
    async jwt({ token }) {
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages:{
    signIn:'/signin'
  }
};
