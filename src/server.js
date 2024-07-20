const express = require("express")

const app = express()
app.use(express.json())

app.post("/users",(request,response)=>{
    const {name, email, password} = request.body

    // response.send(`Usuário: ${name}. E-mail: ${email}. E a senha é: ${password}`);
    response.json({name, email, password});


})

const port = 3333
app.listen(port, () => console.log(`Server is running on port:${port}`))
