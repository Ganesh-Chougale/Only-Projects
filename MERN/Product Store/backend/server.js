// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5000;
const BASE_STRING = `http://localhost:${PORT}`


app.listen(PORT, ()=>{
    console.log(`started server at: ${BASE_STRING}`);
});

app.get("/", (req, res)=>{
    res.send("server is ready to work");
});

app.get("/products", (req, res)=>{
    // no DB yet
})

console.log(process.env.MONGO_URL);