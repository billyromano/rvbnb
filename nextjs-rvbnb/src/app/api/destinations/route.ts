import { NextResponse } from 'next/server';
import { getDestinations } from '@/lib/api/destinations';

export async function GET() {
  try {
    const destinations = await getDestinations();
    return NextResponse.json(destinations);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 }
    );
  }
}