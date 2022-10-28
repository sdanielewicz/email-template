// const router = require('express').Router();
// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);

// router.use('/api', apiRoutes);

// // router.use((req, res) => {
// //   res.send("<h1>Wrong Route!</h1>")
// // });

// router.use((req, res) => {
//   res.render('main')
// });


// module.exports = router;


const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;




// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);