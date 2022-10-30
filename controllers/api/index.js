const router = require('express').Router();
const userRoutes = require('./userRoutes');
const emailRoutes = require('./emailRoutes');


router.use('/users', userRoutes);
router.use('/emails', emailRoutes);


module.exports = router;
