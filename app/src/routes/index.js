const express = require("express");
const router = express.Router();
const universityRouter = require("./university");

router.use("/university", universityRouter);

router.get('/', (request, response) => {
    response.send({
        status : "ok",
        info : "server working"
    });
});

module.exports = router;