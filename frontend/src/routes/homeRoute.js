const express = require("express")
const router = express.Router()
const homeCtrl = require('../controllers/homeController')

router.get('/', homeCtrl.home)

module.exports = router