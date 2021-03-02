const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const routes = require('./routes');
require('./database/index');

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'config','ssl', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'config','ssl', 'server.key'))
};
const app = express();
    app.use(express.json());
    app.use(routes);
    //app.listen(3000);

https.createServer(httpsOptions, app).listen(3000, function(){
    console.log('Servidor funcionando em https://localhost:3000');
});