const User = require('./User');
const Email = require('./Email');
const Template = require('./Template');

// User.hasMany(Email, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

User.hasMany(Email);

Email.belongsTo(User, {
  foreignKey: 'user_id'
});

// Template.belongsTo(Email)

module.exports = { User, Email, Template };
