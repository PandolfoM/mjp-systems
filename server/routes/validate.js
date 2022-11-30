const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/validateClientAccess", (req, res) => {
  const password = req.body.password;

  if (password === process.env.CLIENTPASSWORD) {
    res.json("pass");
  } else {
    res.json("error");
  }
});

module.exports = router;
