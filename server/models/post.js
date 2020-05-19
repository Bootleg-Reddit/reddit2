"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Post extends Model {}

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        notNull: false,
        validate: {
          notEmpty: false
        }
      },
      content: {
        type: DataTypes.STRING,
        notNull: false,
        validate: {
          notEmpty: false
        }
      },
      upvotes: DataTypes.INTEGER,
      downvotes: DataTypes.INTEGER,
      UserID: DataTypes.INTEGER,
      SubredditID: DataTypes.INTEGER
    },
    { sequelize }
  );

  Post.associate = function(models) {
    // associations can be defined here
    // Post.belongsTo(models.User, { foreignKey: "UserID" });
    // Post.belongsTo(models.Subreddit, { foreignKey: "SubredditID" });
    // Post.hasMany(models.Comment, { foreignKey: "PostID" });
  };
  return Post;
};
