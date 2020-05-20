"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Comment extends Model {}

  Comment.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false,
        },
      },
      upvotes: DataTypes.INTEGER,
      downvotes: DataTypes.INTEGER,
      UserID: DataTypes.INTEGER,
      PostID: DataTypes.INTEGER,
    },
    { sequelize }
  );

  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "UserID" });
    Comment.belongsTo(models.Post, { foreignKey: "PostID" });
  };
  return Comment;
};
