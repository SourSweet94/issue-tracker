import Google from 'next-auth/providers/google';
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(new PrismaClient()),
  providers: [Google],
})