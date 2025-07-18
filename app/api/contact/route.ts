import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Contact page API call successful',
    timestamp: new Date().toISOString(),
    page: 'contact'
  })
}

export async function POST() {
  return NextResponse.json({ 
    message: 'Contact page POST request successful',
    timestamp: new Date().toISOString(),
    page: 'contact'
  })
} 