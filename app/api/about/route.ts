import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'About page API call successful',
    timestamp: new Date().toISOString(),
    page: 'about'
  })
}

export async function POST() {
  return NextResponse.json({ 
    message: 'About page POST request successful',
    timestamp: new Date().toISOString(),
    page: 'about'
  })
} 