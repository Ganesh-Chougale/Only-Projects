// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import ProductRouter from "./routes/product.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORTNUM || 5000;

app.use(express.json());  // allows us to accept json as payload in req.body

app.use("/api/products", ProductRouter);

app.get("/", (req, res)=>{
    res.send("server is ready to work");
});

app.listen(PORT, ()=>{
    console.log(`started server at: http://localhost:${PORT}`);
    connectDB();
});

