import express from "express";
import bodyParser from "body-parser";

const app = express();

// Routers
import projectRoutes from "./routes/projects.js";

app.use(bodyParser.json());

// app.use() also is where we can call middleware functions.
app.use("/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Home route. You can make request to '/projects' route for more.");
});

app.listen(3030, () => console.log("Server is running at", 3030));
