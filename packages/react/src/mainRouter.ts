import { Router } from "express";
import { join } from "path";
import { UI_PATH } from "./constants";
import { SnowpackServer } from "./lib/SnowpackServer";

const mainRouter = Router();

mainRouter.get("/build/:name(*)", async (req, res) => {
  const { name } = req.params;
  let result = await SnowpackServer.getComponent(name);
  console.log(result);
  res.status(200).send({ result });
});

mainRouter.get("*", (req, res) => {
  res.sendFile(join(UI_PATH, "index.html"));
});

export { mainRouter };
