import express from "express";

import dummy from "../dummy.json";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("dum", dummy);
  res.send(
    "<div style='background-color: grey; width: 200; height: 100; color: red;'>Hello world</div>"
  );
});

export default router;
