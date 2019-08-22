const express = require("express")
const router = express.Router()
const contactCtrl = require('../controllers/contactController')

router.get("/", contactCtrl.get_all_contact)
router.get("/:id", contactCtrl.get_contact)

module.exports = router