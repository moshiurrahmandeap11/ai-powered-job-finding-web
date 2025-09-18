// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  
  // callback
  callbacks: {
    async signIn({ user, account, profile }) {
      user.provider = account.provider; 
      return true;
    },
    async session({ session, token }) {
      session.user.provider = token.provider; 
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider; 
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };