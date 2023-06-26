const { Router } = require("express");
const router = Router();
const { createConfirmation } = require("../controllers/confirmation.controllers")

router.post("/confirmations", createConfirmation)

module.exports = router;