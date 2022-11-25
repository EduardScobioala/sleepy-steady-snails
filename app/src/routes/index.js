const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({"data" : "index page"});
})

module.exports = router;