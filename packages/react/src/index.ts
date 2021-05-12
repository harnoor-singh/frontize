import express from "express";
import { join } from "path";
import { mainRouter } from "./mainRouter";
import { UI_PATH } from "./constants";
import { SnowpackServer } from "./lib/SnowpackServer";

import dotenv from "dotenv-flow";
dotenv.config();

const PORT = 3006;

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

// For dev environment.
// Add the path to .env.local of the React App you want to test with.
const cwdRelativePath = process.env.TEST_FRONTEND_PATH || "..";
const cwd = join(__dirname, cwdRelativePath);
process.chdir(cwd);

SnowpackServer.initialiseServer(cwd);

const app = express();

app.use(express.static(UI_PATH));
app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
