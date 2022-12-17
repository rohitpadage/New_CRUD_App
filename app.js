import express from 'express'
import connectDB from "./db/connectdb.js";
import {join} from 'path'
import web from "./routes/web.js";
const app = express()


import dotenv  from "dotenv"
dotenv.config()

const port = process.env.PORT || '4000'
const DATABASE_URL = process.env.ATLAS_URI
// Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

// Static Files
app.use('/student',express.static(join(process.cwd(), "public")))
app.use('/student/edit',express.static(join(process.cwd(), "public")))

// Set Template Engine
app.set("view engine", "ejs");

// Load Routes
app.use("/student", web);

app.get('/',(req,res)=>{
    res.send("Go to /student route to see magic...");
})

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})

