const express = require("express");

const app = express();
app.use(express.json());

const connect = require("./config/db")
const city = require("./routers/pollRoute")
const list = require("./routers/pollRoute")


app.use("/api/v1",city)
app.use("/api/v1/",list)

app.listen(1234,async()=>{
    await connect()
    console.log("listen o port 1234")
})