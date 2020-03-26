/*
    ./route/index.js
*/

const router = require("express").Router();
const controller = require("./mainController");

router.get("/main", controller.mainView);

module.exports = router;