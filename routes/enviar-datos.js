const express = require("express");
const router = express.Router();
const controller = require ('../controllers/controller')

router.post('/', controller.enviarDatos)

module.exports = router;