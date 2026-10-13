import express from "express"
import { requestCount } from "./monitoring/requestCount.js";
import client from "prom-client"
import { activeUserCount } from "./monitoring/activeRequestCount.js";

const app = express()

app.use(requestCount)
app.use(activeUserCount)

app.get("/user", (req,res)=>{
    res.json({
        "name": "Nishant"
    })
});

app.post("/user", (req,res)=>{
    res.json({
        "name": "Nishant"
    })
});

app.get("/metrics", async (req, res)=>{
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.listen(3000, ()=>{
    console.log("Server is listening on 3000")
});