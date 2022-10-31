const User = require('./User');
const Email = require('./Email');

// User.hasMany(Email, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

User.hasMany(Email);

Email.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Email }  ;
