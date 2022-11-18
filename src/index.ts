import express from "express";
import router from "./routes/index";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

export default app;
