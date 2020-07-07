import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello GoStack" });
});

const porta = 3333;

app.listen(`${porta}`, () => {
  console.log(`🚀 Server started on port ${porta}`);
});
