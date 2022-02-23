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