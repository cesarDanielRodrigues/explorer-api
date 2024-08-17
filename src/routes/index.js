const {Router} = require("express")

const usersRoutes = require("./users.routes")
const notesRoutes = require("./notes.routes")

const route = Router()

route.use("/users", usersRoutes)
route.use("/notes", notesRoutes)

module.exports = route