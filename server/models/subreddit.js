"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Subreddit extends Model {}

  Subreddit.init(
    {
      name: DataTypes.STRING
    },
    { sequelize }
  );

  Subreddit.associate = function(models) {
    // associations can be defined here
    Subreddit.hasMany(models.UserSubreddit, { foreignKey: "SubredditID" });
    Subreddit.hasMany(models.Post, { foreignKey: "SubredditID" });
  };
  return Subreddit;
};
