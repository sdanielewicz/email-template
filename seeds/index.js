const sequelize = require('../config/connection');
const { User, Email} = require('../models');

const userData = require('./userData.json');
const emailData = require('./emailData.json');


const seedDB = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
 
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  for (const emails of emailData) {
    await Email.create({
      ...emails,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
      user_id: 2,                                           
    });
  }
  console.log('\n----- EMAILS SEEDED -----\n');

  process.exit(0);
};

seedDB();
