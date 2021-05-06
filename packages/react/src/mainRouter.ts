import { Router } from "express";
import { join } from "path";

const mainRouter = Router();

mainRouter.get("/test", (req, res) => {
  res.status(200).send({ message: "Test" });
});

mainRouter.get("/:name(*)", (req, res) => {
  res.send(join(__dirname, "..", "ui", "build", "index.html"));
});

export { mainRouter };
