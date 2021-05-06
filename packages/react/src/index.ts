import express from "express";
import { join } from "path";
import { mainRouter } from "./mainRouter";

import dotenv from "dotenv-flow";
dotenv.config();

const PORT = 3006;

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

// For dev environment.
// Add the path to .env.local of the React App you want to test with.
const cwd = process.env.FRONTEND_PATH || "..";
process.chdir(join(__dirname, cwd));

const app = express();

app.use(express.static(join(__dirname, "..", "ui", "build")));
app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
