const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const indexRouter = require("./src/routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// main router
app.use("/app", indexRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log(`App running on port ${process.env.PORT || 8080}...`);
});
