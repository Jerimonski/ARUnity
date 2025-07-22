import express from "express"
import FormulariosController from "../controllers/FormulariosController.js"

const router = express.Router()

router.get("/", FormulariosController.getAll)
router.get("/menores", FormulariosController.getChild)
router.get("/jovenes", FormulariosController.getYoungers)
router.get("/adultos", FormulariosController.getAdults)
router.get("/viejos", FormulariosController.getOlds)
router.post("/login", FormulariosController.login)
router.post("/", FormulariosController.create)

export default router
