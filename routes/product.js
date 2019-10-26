const express = require('express');
const router = express.Router();

//controllers
const {
    create,
    productById,
    read,
    remove,
    listSearch,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo
} = require('../controllers/product');
const { requireSignin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');

//API
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/product/:productId', read);
router.delete(
    '/product/:productId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    '/product/:productId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    update
);

router.get('/products', list);
router.get('/products/search', listSearch);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.post('/products/by/search', listBySearch);
router.get('/product/photo/:productId', photo);

//middle ware that run before everything for every api call
router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
