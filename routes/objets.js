const express = require('express');
const router = express.Router();

const objetCtrl = require('../controllers/objets');

router.get('/', objetCtrl.getAllStuff);

module.exports = router;