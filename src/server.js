const express = require("express")

const app = express()

app.get("/message",(request,response)=>{
    response.send("Hello, world!")
})

const port = 3333
app.listen(port, () => console.log(`Server is running on port:${port}`))
