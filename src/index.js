const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/server-config');
const Apiroutes = require('./routes/index');
const  Userservice  = require('./service/user-service');


const setup = async()=>{

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use('/api',Apiroutes);

    app.listen(PORT,()=>{
        console.log('HELLO');
    })

}


setup();