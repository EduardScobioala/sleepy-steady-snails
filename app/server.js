const express = require("express");
const app = express();

const indexRouter = require("./src/routes/index");

app.use(express.static("public"));

// main router
app.use("/app", indexRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on port 8080...");
});
