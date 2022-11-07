const router = require('express').Router();
const { Email, User, Template } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//     // find all categories
//     // be sure to include its associated Products
//     try {
//       const emailData = await Email.findAll({
        
//       });
//       res.status(200).json(emailData);
//     } 
//     catch (err) {
//       res.status(500).json(err);
//     }
//   });

  router.get('/:id', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    
    try {
        const emailData = await Template.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          });
      
      res.status(200).json(emailData);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

//   router.post('/:id', async (req,res)=>{
//     try {
//       const data = await (req.body)
  
//       res.status(200).json(data)
//     //   res.render('template',{data})
      
//     }catch{
//       res.status(500).json(err);
//     }
// })

router.post('/:id', async (req, res) => {
    try {
        const data = await (req.body)
  
      res.status(200).json(data)
      
      const newTemplate = await Template.create({
        ...req.body,
        
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
