
const express = require("express")
const router = express.Router();
const urlController = require("../controller/urlController")


router.post("/url/shorten",urlController.createShortenUrl)
router.get("/:urlCode", urlController.redirectUrl)

module.exports = router;


