const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))

let emails = []

// Add email
app.post("/add-email", (req,res)=>{
    const email = req.body.email

    if(!email){
        return res.status(400).send("Email required")
    }

    emails.push(email)

    res.json({
        message:"Email added",
        emails:emails
    })
})

// Get all emails
app.get("/emails",(req,res)=>{
    res.json(emails)
})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
