import express from "express";

const router = express.Router();

let projects = [
  {
    id: "1",
    name: "Project 1",
    author: "Author 1",
    coAuthor: "Co-Author 1",
    createdAt: "ISO DATE",
    updatedAt: "ISO DATE",
  },
  {
    id: "2",
    name: "Project 2",
    author: "Author 2",
    coAuthor: "Co-Author 2",
    createdAt: "ISO DATE",
    updatedAt: "ISO DATE",
  },
];

router.get("/", (req, res) => {
  console.log("Getting all projects.");
  res.send(projects);
});

//get with ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log("Getting the project with id ", id);
  const project = projects.find((e) => e.id == id);
  res.send(project ? project : "Couldn't found");
});

router.post("/", (req, res) => {
  const project = req.body[0];
  console.log("Creating project", project);
  if (project.id && !projects.find((e) => e.id == project.id)) {
    project.createdAt = new Date().toISOString();
    projects.push(project);
    res.send(`Project ${project.name} created with id ${project.id}`);
  } else {
    res.send(
      "Creating project failed. Please check your Project ID and Project Name."
    );
  }
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, author, coAuthor } = req.body[0];
  const project = projects.find((e) => e.id == id);
  if (project) {
    if (name) project.name = name;
    if (author) project.author = author;
    if (coAuthor) project.coAuthor = coAuthor;
    project.updatedAt = new Date().toISOString();
    res.send(`Project with id ${id} has been updated.`);
  } else {
    res.send("Project cannot be found");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    projects = projects.filter((e) => e.id !== id);
    res.send(`Project deleted with id ${id}`);
  } else {
    res.send("Project cannot be found.");
  }
});

export default router;
