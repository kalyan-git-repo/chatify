import mongoose from 'mongoose'
import { ENV } from './env'

export const connectDB = async () => {
    try {
        const {MONGO_URI} = ENV
        if (!MONGO_URI) throw new Error("MONGO_URI is not set")
            
        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log("MONGODB CONNECTED SUCCESSFULLY!", conn.connection.host)
        
    } catch (error) {
        console.error("Error connecting to MONGODB", error)
        process.exit(1)  
    }

}