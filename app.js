import express from "express";
const app = express();

app.get("/", (req, res) => {
    try {
        res.json({
            "status": 200,
            "message": "Learning Jenkins..."
        });
    } catch (error) {
        res.json({
            "status": 500,
            "error": error
        });
    }
});

app.get("/environment", (req, res) => {
    try {
        console.log("add prod env");
        res.json({
            "status": 200,
            "message": "add prod env Learning Jenkins..."
        });
    } catch (error) {
        res.json({
            "status": 500,
            "error": error
        });
    }
});

app.listen(9000,()=>{
    console.log("listening on 9000 port")
});