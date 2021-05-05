import express from "express";

const PORT = 3006;
const app = express();

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
