import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Allow access in development mode so you can see changes locally
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  // Allow access to the admin panel, API routes, and the coming-soon page itself
  if (request.nextUrl.pathname.startsWith('/admin') || 
      request.nextUrl.pathname.startsWith('/api') || 
      request.nextUrl.pathname.startsWith('/coming-soon')) {
    return NextResponse.next()
  }

  // Redirect all other traffic to the coming soon page
  return NextResponse.redirect(new URL('/coming-soon', request.url))
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
