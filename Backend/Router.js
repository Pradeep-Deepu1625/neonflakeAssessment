const express = require('express')
const router = express.Router();
const Ctrl = require('./Controller')
router.get('/',Ctrl.getData)
router.post('/createFile',Ctrl.createData)
router.get('/:id',Ctrl.getById)
module.exports = router;