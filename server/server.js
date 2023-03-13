const express = require("express");
const productRouter = require("./routes/products.js")
const dotenv = require("dotenv").config();

const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use("/api/products" , productRouter)

app.get("*" , (req , res) => {
    res.status(404).json({msg: "404 PAGE NOT FOUND"})

})

app.get("/" , (req , res) => {
    res.send("Hello World!")
})


app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000")
})