const router = require("express").Router();
require("dotenv").config();

const Controller = require("../controllers/test");



router.post("/fillData",Controller.PostData);

router.get("/search",Controller.search);




module.exports = router;
