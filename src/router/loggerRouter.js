import { fileURLToPath } from "url";
import { dirname } from "path";
import { Router } from "express";

const looger = Router();

// End Point Antes de la Authentication
looger.get("/", (req, res) => {
  res.send("Raiz de Logger 💻 MiddleWare");
});

// MidleWare de Doble Cascada
looger.use((req, res, next) => {
  console.log("Antes paso por el MiddleWare 🌟 Logger");
  next();
});

looger.use((req, res, next) => {
  console.log("Antes paso por el MiddleWare 👮‍♀️ Authentication");
  if (req.query.login == "angel35") {
    next();
  } else {
    console.log("No paso la Authenticacion");
    res.send("No Autorizado");
  }
  next();
});

looger.get("/dashboard", (req, res) => {
  res.send("Raiz de Logger 💻 MiddleWare / DashBoard 💸");
});

looger.get("/profile", (req, res) => {
  res.send("Raiz de Logger 💻 MiddleWare / Perfil 👨‍🦲");
});

export default looger;
