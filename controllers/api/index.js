const router = require('express').Router();
const userRoutes = require('./userRoutes');
const emailRoutes = require('./emailRoutes');
const templateRoutes = require('./templateRoutes');



router.use('/users', userRoutes);
router.use('/emails', emailRoutes);
router.use('/template', templateRoutes);




module.exports = router;
