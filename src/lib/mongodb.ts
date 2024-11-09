import mongoose from 'mongoose'

declare global {
    var mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    } | null;
}

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    }
}

export async function connectToDatabase() {
    if (cached?.conn) {
        return cached.conn
    }

    if (!cached?.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached!.promise = mongoose.connect(MONGODB_URI as string).then(() => {
            return cached!
        })
    }
    try {
        cached!.conn = await cached!.promise!
    } catch (e) {
        cached!.promise = null
        throw e
    }

    return cached!.conn
}