import { fileURLToPath } from "url";
import { Router } from "express";
import { dirname } from "path";

const routerTest = Router();

routerTest.get("/", (req, res) => {
  res.send("Hola que Hace desde la raiz, de el Test ");
});

routerTest.get("/datum", (req, res) => {
  res.send("Hola que Hace desde la raiz, pero con Datum");
});

routerTest.get("/dataList", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename).replace("router", "data");

  res.sendFile("/simulator.json", {
    root: __dirname,
  });
});

routerTest.post("/user", (req, res) => {
  const dataRequest = req.body;
  console.log(dataRequest);
  res.send("Nuevo Usuario ADD");
});

export default routerTest;
