const express = require('express');
const app = express();

/*
app.use((req, res, next) => {
    console.log('Requête reçue!');
    next();
})

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'La requête a été reçue !' });
    next();
});

app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
});
*/

app.use('/api/donnees', (req, res, next) => {
    const donnees = [
        { 
            "_id" : 1, 
            "name" : "AC1 Phone1", 
            "type" : "phone", 
            "price" : 200.05, 
            "rating" : 3.8, 
            "warranty_years" : 1, 
            "available" : true 
        },
        { 
            "_id" : 2, 
            "name" : "AC2 Phone2", 
            "type" : "phone", 
            "price" : 147.21, 
            "rating" : 1, 
            "warranty_years" : 3, 
            "available" : false 
        },
        { 
            "_id" : 3, 
            "name" : "AC3 Phone3", 
            "type" : "phone", 
            "price" : 150, 
            "rating" : 2, 
            "warranty_years" : 1, 
            "available" : true },
        { 
            "_id" : 4, 
            "name" : "AC4 Phone4", 
            "type" : "phone", 
            "price" : 50.20, 
            "rating" : 3, 
            "warranty_years" : 2, 
            "available" : true 
        },
    ];
});

module.exports = app;