import { Router } from "express";
import { products } from "../data/products.js";

const Crud = Router();

Crud.all("/", (req, res) => {
  res.send("Raiz de la Aplicacion Crud ✅");
});

Crud.get("/products", (req, res) => {
  res.json(products);
});

Crud.get("/products/:id", (req, res) => {
  res.send("Obtendiendo Un Producto Por Id");
});

Crud.post("/products", (req, res) => {
  res.send(`Creando Productos con Nombre: ${req.body.name} Id: ${req.body.id}`);
});

Crud.put("/products", (req, res) => {
  res.send("Actualizando Productos");
});

Crud.delete("/products", (req, res) => {
  res.send("Eliminando  Productos");
});

export default Crud;
