import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

const porta = 3333;

app.listen(`${porta}`, () => {
  console.log(`🚀 Server started on port ${porta}`);
});
