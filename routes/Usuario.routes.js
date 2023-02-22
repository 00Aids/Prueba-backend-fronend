import { Router } from "express";
import UsuarioController from "../src/controllers/Usuario.controller.js";

const router = Router()

router.post("/Create/Usuario", UsuarioController.CreateUsuario)
router.get("/Get/Usuarios", UsuarioController.getAll)
router.get("/GetU/Usuario/:id", UsuarioController.getOne)
router.patch("/Patch/Usuario/", UsuarioController.Update)
router.delete("/Delete/Usuario/:id", UsuarioController.Delete)

export default router