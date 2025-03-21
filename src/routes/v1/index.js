const Usercontroller = require('../../controller/user');

const express = require('express');
const router = express.Router();
const middleware = require('../../middlewares/usermiddleware');

router.post('/user',middleware.validation,Usercontroller.createuser);
router.post('/Signin',middleware.validation,Usercontroller.SignIn);


module.exports = router;