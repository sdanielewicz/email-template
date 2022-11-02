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
      include: [{ model: Email}]
    });

    // console.log("MY ID       " + userData.id);
    // console.log("MY NAME       " + userData.name);
    // console.log("MY EMAIL       " + userData.email);

    // const emailData = await Email.findAll({
    //   // include: [{model: User}]
    //   where: {user_id:1}
    // }
    // );

    const emailData = userData.emails;

    // console.log(JSON.stringify(userData, null, 2));
    // console.log("WHAT IS "+emailData)

    const user = userData.get({ plain: true });
    const emails = emailData.map((email) => email.get({ plain: true }));

    // const newemail = JSON.stringify(emails);
    console.log(emails[1].email_body)

    emails.forEach(element => {
      // var count = ""
      let re = new RegExp('([%])+([%])+([%])');
      var emailBody = element.email_body
      console.log(emailBody)
      console.log(emailBody.replace(re, 'YES?'))
      // console.log(newBody)
      // count += JSON.stringify(yes)
      // console.log(count);
   
    });
    // for (var i =0; i<emails.length; i++){
      
    // }

    res.render('profile', {
      ...user,
      emails,
      logged_in: true,
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
