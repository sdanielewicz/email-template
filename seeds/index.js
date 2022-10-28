const sequelize = require('../config/connection');
const { User} = require('../models');

const userData = require('./userData.json');

const seedDB = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
 
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedDB();
