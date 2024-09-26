const express = require("express");
const router = express.Router();
const controller = require ('../controllers/controller')

router.get('/', controller.formulario)

module.exports = router;