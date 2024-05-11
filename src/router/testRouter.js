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

routerTest.get("/hola/:name", (req, res) => {
  const params = req.params.name;
  res.send("Hola Sr@ " + params.toUpperCase());
});

routerTest.get("/add/:num1/:num2", (req, res) => {
  const paramsObjet = {
    numero1: req.params.num1,
    numero2: req.params.num2,
  };

  const resultado = +paramsObjet.numero1 + +paramsObjet.numero2;
  res.send("Resultado de la Suma es: " + resultado);
});

routerTest.get("/calculo/:horas/:minutos", (req, res) => {
  const { horas, minutos } = req.params;
  const resultado = parseInt(horas * 60 + minutos) / (4 * 60);
  const label1 = "😀";
  const label2 = "😥";
  const labelFinal = "Resultado : % ";
  resultado <= 25
    ? res.send(labelFinal + resultado.toFixed(0) + label2)
    : res.send(labelFinal + resultado.toFixed(0) + label1);
});

routerTest.get("/name/:user", (req, res) => {
  const query = req.query;
  console.log(query.user);
  res.send("Datos de la query:");
});

routerTest.post("/user", (req, res) => {
  const dataRequest = req.body;
  console.log(dataRequest);
  res.send("Nuevo Usuario ADD");
});

export default routerTest;
