const router = require('express').Router();
const { Email, User } = require('../../models');
const withAuth = require('../../utils/auth');

var emailBodies = [];


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
            
      
    
    const emails = emailData.get({ plain: true });
    // const emails = emailData.map((email) => email.get({ plain: true }));
    
    let stringEmail = JSON.stringify(emails);
    
          
            

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

// router.post('/:id', async (req,res)=>{
//   try {
//     const data = await (req.body)

//     res.status(200).json(data)
//     // res.render('template',{data})
    
//   }catch{
//     res.status(500).json(err);
//   }
// })

module.exports = router;