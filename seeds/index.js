const seedTest = require('./test-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedTest();
  console.log('\n----- TEST SEEDED -----\n');

  process.exit(0);
};

seedAll();
