const express = require("express");

const router = express.Router();

router.get("/test1", function(req, res) {
    res.send("This is the test 1 web page");
});

router.get("/test2", function(req, res) {
    res.send("This is the test 2 web page");
});

module.exports = router;
