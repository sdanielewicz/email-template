const router = require('express').Router();
const {Email, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    res.render('login', { 
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/emails/:id', async (req, res) => {
  try {
    const emailData = await Email.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const email = emailData.get({ plain: true });

    res.render('profile', {
      ...email,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Email }]
    });

    

    const emailData = await Email.findAll({
      include: [{model: User}]
       
        
        
      
 
    }
     

    );

  //  const joinUser =  await User.findOne({ where: { id: userId } });

  //     const joinEmail = await Email.findOne({ where: { id: emailId } });
     
    
      
  
    // console.log(emailData);

    const user = userData.get({ plain: true });
    const emails = emailData.map((email) => email.get({ plain: true }));

    res.render('profile', {
      ...user,
      emails,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
