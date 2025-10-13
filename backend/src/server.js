import express from 'express'
import cookieParser from "cookie-parser"
import authRoutes from"./routes/auth.route.js"
import messageRoutes from"./routes/message.route.js"
import path from "path"
import { connectDB } from './lib/db.js'
import { ENV } from './lib/env.js'

const app = express()

const PORT = ENV.PORT || 3000
const _dirname = path.resolve()

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(_dirname, "../frontend", "dist", "index.html"))
    })
}


app.listen(PORT, () => {
    console.log("Server running on port:", + PORT)
    connectDB()
})