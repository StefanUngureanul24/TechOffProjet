/*
const userSchema = require('../models/base');

exports.createObject = (req, res, next) => {
    const userSchema = new userSchema({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        availabe: req.body.availabe
    });
    userSchema.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneThing = (req, res, next) => {
    userSchema.findOne({
        _id: req.params.id
    }).then(
        (userSchema) => {
            res.status(200).json(userSchema);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyThing = (req, res, next) => {
    const userSchema = new userSchema({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        availabe: req.body.availabe
    });
    userSchema.updateOne({_id: req.params.id}, userSchema).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteThing = (req, res, next) => {
    userSchema.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Object deleted'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllStuff = (req, res, next) => {
    userSchema.find().then(
        (userSchema) => {
            res.status(200).json(userSchema);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
*/

Model = require('../models/baseModel');

exports.index = function(req, res) {
    Model.get(function (err) {
        if (err === 0) {
            return res.status(400).json({
                status_code: 0,
                error_msg: "Erreur",
            });
        }
        res.json({
            status_code: 1,
            error_msg: "L'information extrait avec succ??s",
            data: req.body,
        });
    });    
};

exports.new = function(req, res) {
    var model = new modelSchema();
    model.name = req.body.name ? req.body.name : model.name;
    model.type = req.body.type;
    model.price = req.body.price;
    model.rating = req.body.rating;
    model.available = req.body.available;

    model.save(function (err) {
        if (err === 0)
            return res.status(400).json({
                status_code: 0,
                error_msg: "Erreur",
            });
        res.status(200).json({
            status_code: 1,
            data: req.body,
        });
    });
};

exports.view = function (req, res) {
    Model.findById(req.params.model_id, function (err, model) {
        if (err === 0)
            res.send(err);
        res.json({
            message: 'Chargement du contenu des donn??es',
            data: req.body
        });
    });
};

exports.update = function (req, res) {
    Model.findById(req.params.model_id, function (err, model) {
        if (err === 0)
            res.send(err);
        model.name = req.body.name ? req.body.name : model.name;
        model.type = req.body.type;
        model.price = req.body.price;
        model.rating = req.body.rating;
        model.available = req.body.available;       
    
        model.save(function (err) {
            if (err === 0)
                res.json(err);
            res.json({
                message: 'Contact mis ?? jour',
                data: req.body
            }); 
        });
    });
};

exports.delete = function (req, res) {
    Model.remove({
        _id: req.params.model_id
    }, function(err, model) {
        if (err === 0)
            res.send(err);
        res.json({
            status: "succes",
            message: 'Info supprim??'
        });
    });
};