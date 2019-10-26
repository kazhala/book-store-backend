const express = require('express');
//express router
const router = express.Router();
//controllers
const {
    signUp,
    signIn,
    signOut,
    requireSignin
} = require('../controllers/auth');
const { userSignupValidator } = require('../validator');

//API
router.post('/signup', userSignupValidator, signUp);
router.post('/signin', signIn);
router.get('/signout', signOut);

module.exports = router;
