/*
const express = require('express');
const router = express.Router();
*/

let router = require('express').Router();

/*
const objetCtrl = require('../controllers/objets');

router.get('/', objetCtrl.getAllStuff);
router.post('/', objetCtrl.createObject);
router.get('/:id', objetCtrl.getOneThing);
router.put('/:id', objetCtrl.modifyThing);
router.delete('/:id', objetCtrl.deleteThing);
*/

router.get('/', function (req, res) {
    res.json({
        status: 'API working',
        message: 'Welcome ...'
    });
});

module.exports = router;