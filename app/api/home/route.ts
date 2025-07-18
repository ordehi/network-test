import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Home page API call successful',
    timestamp: new Date().toISOString(),
    page: 'home'
  })
}

export async function POST() {
  return NextResponse.json({ 
    message: 'Home page POST request successful',
    timestamp: new Date().toISOString(),
    page: 'home'
  })
} 