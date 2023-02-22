import { Router } from "express";
import UsuarioController from "../src/controllers/Usuario.controller";

const router = Router()
const controller = new UsuarioController()

router.post("/Create/Usuario", controller)
router.get("/Get/Usuarios", controller)
router.get("/GetU/suario/:id", controller)
router.patch("/Patch/Usuario/:id", controller)
router.delete("/Delete/Usuario/:id", controller)

export default router