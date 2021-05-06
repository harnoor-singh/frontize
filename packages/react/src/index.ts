import express from "express";
import { join } from "path";

const PORT = 3006;
const app = express();

app.use(express.static(join(__dirname, "..", "ui", "build")));

app.get("*", (req, res) => {
  res.send(join(__dirname, "..", "ui", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
