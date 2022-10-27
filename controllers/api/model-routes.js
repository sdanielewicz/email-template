const router = require('express').Router();
const {testModel} = require('../../models');



// router.get('/model', async (req, res) => {
//   try{

//   }
//   catch{

//   }
// }

//     router.get('/', async (req, res) => {
//       // find all categories
//       // be sure to include its associated Products
//       try {
//         const testData = await testModel.findAll();
//         res.status(200).json(testData);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     });
  

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const testData = await testModel.findAll();
    res.status(200).json(testData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
