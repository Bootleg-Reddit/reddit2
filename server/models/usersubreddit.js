"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class UserSubreddit extends Model {}

  UserSubreddit.init(
    {
      UserID: DataTypes.INTEGER,
      SubredditID: DataTypes.INTEGER
    },
    { sequelize }
  );

  UserSubreddit.associate = function(models) {
    // associations can be defined here
    UserSubreddit.belongsTo(models.User, { foreignKey: "UserID" });
    UserSubreddit.belongsTo(models.Subreddit, { foreignKey: "SubredditID" });
  };
  return UserSubreddit;
};
