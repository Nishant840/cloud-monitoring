import express from "express"

const app = express()

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

app.listen(3000, ()=>{
    console.log("Server is listening on 3000")
});