import express from "express";
import bodyParser from "body-parser";

const app = express();

// Routers
import projectRoutes from "./routes/projects.js";

app.use(bodyParser.json());

app.use("/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3030, () => console.log("Server is running at", 3030));
