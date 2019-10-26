const express = require('express');
const router = express.Router();

//controllers
const {
    create,
    categoryById,
    read,
    update,
    remove,
    list
} = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

//3 middle wares to validate proceed of the API
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/category/:categoryId', read);
router.put(
    '/category/:categoryId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    update
);
router.delete(
    '/category/:categoryId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.get('/categories', list);

//middle ware at run time, it would execute before other middle wares
router.param('userId', userById);
router.param('categoryId', categoryById);

module.exports = router;
