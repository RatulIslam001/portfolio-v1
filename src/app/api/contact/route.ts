import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Contact from '@/models/Contact'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        
        // Connect to database
        await connectToDatabase()
        
        // Create new contact document
        const contact = await Contact.create(body)
        
        return NextResponse.json(
            { message: 'Message sent successfully', contact },
            { status: 201 }
        )
    } catch (error) {
        console.error('Error in contact API:', error)
        return NextResponse.json(
            { message: 'Failed to send message' },
            { status: 500 }
        )
    }
}
