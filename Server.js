import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`GGNodes Panel running → http://localhost:${PORT}`);
});
