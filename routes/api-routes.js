/*
const express = require('express');
const router = express.Router();
*/

/*
const objetCtrl = require('../controllers/objets');

router.get('/', objetCtrl.getAllStuff);
router.post('/', objetCtrl.createObject);
router.get('/:id', objetCtrl.getOneThing);
router.put('/:id', objetCtrl.modifyThing);
router.delete('/:id', objetCtrl.deleteThing);
*/

/*
router.get('/', function (req, res) {
    res.json({
        status: 'API working',
        message: 'Welcome ...'
    });
});

module.exports = router;
*/

// Initaliser l'express router
let router = require('express').Router();

// La reponse par défaut de l'API
router.get('/', function (req, res) {
    res.json({
        status: 'API fonctionne proprement',
        message: 'Bienvenu sur RESTHub'
    });
});

//const { route } = require('../app');
var modelController = require('../controllers/objetsControllers');

router.route('/model')
    .get(modelController.index)
    .post(modelController.new);

router.route('/model/:model_id')
    .get(modelController.view)
    .patch(modelController.update)
    .put(modelController.update)
    .delete(modelController.delete);

module.exports = router;