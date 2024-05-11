import { fileURLToPath } from "url";
import { dirname } from "path";
import { Router } from "express";

const looger = Router();

looger.use((req, res, next) => {
  console.log("Paso Aqui a Nivel  Usuario");
  next();
});

looger.get("/", (req, res) => {
  res.send("Raiz de Logger 💻 MiddleWare");
});

looger.get("/profile", (req, res) => {
  res.send("Raiz de Logger 💻 MiddleWare / Perfil 👨‍🦲");
});

export default looger;
