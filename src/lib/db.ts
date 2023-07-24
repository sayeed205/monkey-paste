// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose

// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb

import { MongoClient } from 'mongodb';
import mongoose, { Connection } from 'mongoose';

import { env } from '@/env.mjs';

const MONGODB_URI = env.MONGODB_URI;

declare global {
    // eslint-disable-next-line no-var
    var mongoose: {
        conn: Connection | null; // Initialize with null
        promise: Promise<Connection> | null; // Initialize with null
    };

    var _mongoClientPromise: Promise<MongoClient> | null;
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function db() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            return mongoose.connection;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        console.log('MONGODB_URI: ', MONGODB_URI);
        client = new MongoClient(MONGODB_URI);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(MONGODB_URI);
    clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export { clientPromise };

export default db;
