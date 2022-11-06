const router = require('express').Router();
const { Email, User } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newProject = await Project.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
      const emailData = await Email.findAll({
        
      });
      res.status(200).json(emailData);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const emailData = await Email.findByPk(req.params.id, {
              include: [
                {
                  model: User,
                  attributes: ['name'],
                },
              ],
            });
            
      
      // res.status(200).json(emailData);

       

    const email = emailData.get({ plain: true });

    res.render('emails', {
       ...email
    });
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;