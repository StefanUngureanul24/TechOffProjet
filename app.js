/*
const { application } = require('express');
const express = require('express');
//const app = express();
const mongoose = require('mongoose');
//const userSchema = require('');
const model = require('./models/baseModel');
const router = express.Router();
const objetsRoutes = require('./routes/api-routes');
*/

//app.use('/api/objets', objetsRoutes);

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

/*
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
*/

/*
app.use('/api/base', (req, res, next) => {
    const donnees = [
        { 
            "id" : 1, 
            "name" : "AC1 Phone1", 
            "type" : "phone", 
            "price" : 200.05, 
            "rating" : 3.8, 
            "warranty_years" : 1, 
            "available" : true 
        },
        { 
            "id" : 2, 
            "name" : "AC2 Phone2", 
            "type" : "phone", 
            "price" : 147.21, 
            "rating" : 1, 
            "warranty_years" : 3, 
            "available" : false 
        },
        { 
            "id" : 3, 
            "name" : "AC3 Phone3", 
            "type" : "phone", 
            "price" : 150, 
            "rating" : 2, 
            "warranty_years" : 1, 
            "available" : true },
        { 
            "id" : 4, 
            "name" : "AC4 Phone4", 
            "type" : "phone", 
            "price" : 50.20, 
            "rating" : 3, 
            "warranty_years" : 2, 
            "available" : true 
        },
    ];
});
*/

/*
app.post('/api/base', (req, res, next) => {
    delete req.body.id;
    const userSchema = new userSchema({
         //Copier tous les éléments de req.body
        ...req.body
    });
    
    //Enregistrer les données dans la base
    userSchema.save()
        // Réussite
        .then(() => res.status(201).json({ message: 'Objet enregistré' }))
        // Erreur
        .catch(error => res.status(400).json({ error }));
});
*/

/*
app.use('/api/base', (req, res, next) => {
    userSchema.find()
        // Réussite
        .then(userSchema => res.status(200).json(userSchema))
        // Erreur
        .catch(error => res.status(400).json({ error }));
});

app.get('api/base/:id', (req, res, next) => {
    userSchema.findOne({ _id: req.params.id })
        .then(userSchema => res.status(200).json(userSchema))
        .catch(error => res.status(400).json({ error }));
});

app.put('/api/base/:id', (req, res, next) => {
    userSchema.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié!' }))
        .catch(error => res.status(400).json({ error }));
});

app.delete('/api/base/:id', (req, res, next) => {
    userSchema.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié!' }))
        .catch(error => res.status(400).json({ error }));
});
*/

/*
router.post('/', (req, res, next) => {
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
});

router.get('/:id', (req, res, next) => {
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
})

router.get('/:id', (req, res, next) => {
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
                message: 'Object updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

router.delete('/:id', (req, res, next) => {
    userSchema.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    )
});

router.get('/' + '', (req, res, next) => {
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
});

mongoose.connect('mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = router;*/