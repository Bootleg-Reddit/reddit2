'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class PostUser extends Model{};
  PostUser.init({
    PostId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    Vote: DataTypes.BOOLEAN
  }, { sequelize })
  PostUser.associate = function(models) {
    // associations can be defined here
    PostUser.belongsTo(models.Post);
    PostUser.belongsTo(models.User);
  };
  return PostUser;
};