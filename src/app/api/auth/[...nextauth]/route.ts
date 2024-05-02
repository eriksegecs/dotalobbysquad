
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth/next'
import { getAuthOptions } from '@/lib/auth'

import type { NextRequest } from 'next/server'

async function handler(req: NextRequest, ctx: { params: { nextauth: string[] } }) {
  return NextAuth(req, ctx, getAuthOptions(req))
}

export {
  handler as GET,
  handler as POST
}