const express = require('express');
const router = express.Router();

const objetCtrl = require('../controllers/objets');

router.get('/', objetCtrl.getAllStuff);
router.post('/', objetCtrl.createObject);
router.get('/:id', objetCtrl.getOneThing);
router.put('/:id', objetCtrl.modifyThing);
router.delete('/:id', objetCtrl.deleteThing);

module.exports = router;