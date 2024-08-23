const {Router} = require("express")

const usersRoutes = require("./users.routes")
const notesRoutes = require("./notes.routes")
const tagsRoutes = require("./tags.routes")

const route = Router()

route.use("/users", usersRoutes)
route.use("/notes", notesRoutes)
route.use("/tags", tagsRoutes)

module.exports = route