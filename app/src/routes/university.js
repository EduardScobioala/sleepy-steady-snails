const express = require("express");
const router = express.Router();
const dbService = require('../controller/dbService');

router.get("/", (req, res) => {u
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const db = dbService.getDBServiceInstance();

    const query = "SELECT * FROM university";
    const result = db.execute(query, []);

    result
        .then(data => res.json({ universities: data }))
        .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
    const db = dbService.getDBServiceInstance();

    const query = "SELECT * FROM university WHERE id = ?";
    const result = db.execute(query, [req.params.id]);

    result
        .then(data => res.json({ data }))
        .catch(err => console.log(err));
});

router.post("/", (req, res) => {
    const db = dbService.getDBServiceInstance();

    const query = "INSERT INTO university (name, country, city) VALUES (?, ?, ?)";
    const { name, country, city } = req.body;
    const result = db.execute(query, [name, country, city]);

    result
        .then(() => res.json({ "info": "data inserted successfuly" }))
        .catch(err => console.log(err));
});

router.put("/:id", (req, res) => {
    const db = dbService.getDBServiceInstance();

    const query = "UPDATE university SET name = ?, country = ?, city = ? WHERE id = ?";
    const { name, country, city } = req.body;
    const result = db.execute(query, [name, country, city, req.params.id]);

    result
        .then(() => res.json({ "info": "data updated successfuly" }))
        .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
    const db = dbService.getDBServiceInstance();

    const query = "DELETE FROM university WHERE id = ?";
    const result = db.execute(query, [req.params.id]);

    result
        .then(() => res.json({ "info": "data deleted successfuly" }))
        .catch(err => console.log(err));
});

module.exports = router;