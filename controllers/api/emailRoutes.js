const router = require('express').Router();
const { Email, User } = require('../../models');
const withAuth = require('../../utils/auth');

var emailBodies = [];


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

  router.get('/:id', withAuth, async (req, res) => {
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

       
      console.log("HEREHRHRHERHER"+emailData)

    const emails = emailData.get({ plain: true });
    // const emails = emailData.map((email) => email.get({ plain: true }));
    console.log("HEREHRHRHERHER2222222"+JSON.stringify(emails))
    let stringEmail = JSON.stringify(emails);
    // console.log(stringEmail);
            console.log(emails);
            console.log(emails.email_body);
            // console.log(emails.email_body.replace(/([%])+([%])+([%])/g, '<input class="form-input" type="text" value=""/>'));

            var regEmail = emails.email_body.replace(/([%])+([%])+([%])/g, '<input class="form-input" type="text" value=""/>')
  
            console.log(regEmail);

    res.render('emails', {
       emails,
       regEmail,
       logged_in: true,
    });
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/:id',async (req,res)=>{
  try {
    const data = await (req.body)
    console.log("WORKED?"+data)
    res.status(200).json(data)
  }catch{
    res.status(500).json(err);
  }
})

module.exports = router;