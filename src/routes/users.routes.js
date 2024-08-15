const { Router } = require("express")
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

// function myMiddleware(request, response, next) {
//   if (!request.body.isAdmin) {
//     return response.json({ message: "erro" })
//   }

//   next()
// }

const usersController = new UsersController()

// usersRoutes.use(myMiddleware)
usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)
// usersRoutes.post("/", myMiddleware, usersController.create)

module.exports = usersRoutes
