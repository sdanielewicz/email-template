const router = require('express').Router();
const modelRoutes = require('./model-routes');

router.use('/tests', modelRoutes);

module.exports = router;
