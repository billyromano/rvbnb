import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AuthenticationError, AuthorizationError } from './lib/errors';

export function middleware(request: NextRequest) {
  try {
    // Add your authentication/authorization logic here
    return NextResponse.next();
  } catch (error) {
    if (error instanceof AuthenticationError) {
      return new NextResponse(
        JSON.stringify({ message: 'Authentication required' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }
    
    if (error instanceof AuthorizationError) {
      return new NextResponse(
        JSON.stringify({ message: 'Permission denied' }),
        { status: 403, headers: { 'content-type': 'application/json' } }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }
}