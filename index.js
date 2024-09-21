import express from "express";
import Connection from "./db/conn.js";
import dotenv from "dotenv";
import foodRouter from "./routes/foodRoute.js"
// import jewelryRouter from "./routes/jewelleryRoutes.js";



const app = express();
import cors from "cors";
dotenv.config()

app.use(cors())
app.use(express.json())
const PORT = 8000
app.use("/api/foods", foodRouter)
// app.use("/api/jewelrys",jewelryRouter )

Connection()
app.listen(PORT, () =>{
    console.log("listening on port 8000");
    
})