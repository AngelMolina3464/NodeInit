import express from "express";
import morgan from "morgan";
import routerTest from "../router/testRouter.js";
import "./env.js";

const app = express();

app.use(morgan("dev"));
app.use("/test", routerTest);


const port = process.env.PORT ?? 4000;
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.text());

app.use((req, res, next) => {
  res.status(404).send("¡Error 404 No encontrado ❌!");
});

app.listen(port, () => {
  console.log(`Servidor Funcionando : http://localhost:${port}`);
});
