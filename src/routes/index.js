const {Router} = require("express")

const usersRoutes = require("./users.routes")

const route = Router()

route.use("/users", usersRoutes)

module.exports = route