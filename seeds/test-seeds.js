const {testModel} = require('../models');

const testData = [
  {
    test_name: 'first template',
  },
  {
    test_name: 'second template',
  },
  {
    test_name: 'third template',
  },
  {
    test_name: 'fourth template',
  },
  {
    test_name: 'fifth template',
  },
];

const seedTest = () => testModel.bulkCreate(testData);

module.exports = seedTest;
