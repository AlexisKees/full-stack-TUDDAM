const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

router.post('/', controller.mostrarDatos)

module.exports = router;