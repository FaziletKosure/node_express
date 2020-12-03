const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("main",{name:req.query.name});
});
module.exports = router;