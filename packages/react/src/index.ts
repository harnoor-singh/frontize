import express from "express";

const PORT = 3006;
const app = express();

app.get("*", (req, res) => {
  res.send("Syccess");
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
