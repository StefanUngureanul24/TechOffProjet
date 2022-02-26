/*
    Importation du packet HTTP
*/
const http = require('http');

var express = require('express');
var app = express();

let apiRoutes = require('./routes/objets');

// Import du Body parser et du mongoose 
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        /*
            case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        */
        default:
            throw error;
    }
};

const server = http.createServer(app);

/*
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port ' + port;
    console.log('Listening on ' + bind); 
});
*/

app.on('error', errorHandler);
app.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port ' + port;
    console.log('Listening on ' + bind); 
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', {useNewUrlParser: true});
var db = mongoose.connection;

if (!db) 
    console.log("Erreur lors de la connextion du db");
else 
    console.log("Connexion de la db réussie");

app.get('/', (req, res) => res.send('Bonjour, la connextion est réussie'));

//server.listen(port);

app.use('/api', apiRoutes);
app.listen(port, function() {
    console.log("Running RestHub on port " + port);
});