const express = require("express")

const app = express()

app.post("/users",(request,response)=>{
    response.send(`Voce chamou o POST`)
})

const port = 3333
app.listen(port, () => console.log(`Server is running on port:${port}`))
