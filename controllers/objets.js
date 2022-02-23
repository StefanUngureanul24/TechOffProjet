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