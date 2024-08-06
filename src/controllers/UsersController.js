const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UserController{
    async create(request,response){

        const {name, email, password} = request.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if
        // if(!name){
        //     throw new AppError("O nome esta faltando")
        // }

        // response.status(201).json({name, email, password});
    }
}
module.exports = UserController