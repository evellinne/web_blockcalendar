const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const routes = require('./routes');
const cors = require("cors");
require('./database/index');

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'config','teste', 'cert.pem')),
    key: fs.readFileSync(path.join(__dirname, 'config','teste', 'key.pem'))
};

const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    
https.createServer(httpsOptions, app).listen(3000, () => {
    console.log('Servidor funcionando em https://localhost:3000');
});
