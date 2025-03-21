const Usercontroller = require('../../controller/user');

const express = require('express');
const router = express.Router();

router.post('/user',Usercontroller.createuser);

module.exports = router;