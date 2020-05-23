"use strict";
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class User extends Model {}

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Username cannot be empty",
          },
          len: [3, 10],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Email cannot be empty!",
          },
          isEmail: {
            msg: "Invalid email format!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password cannot be empty!",
          },
          len: {
            args: [8, 15],
            msg: "Password length is not in this range",
          },
        },
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (model, option) => {
          model.password = hashPassword(model.password);
        },
      },
    }
  );

  User.associate = function (models) {
    // associations can be defined here
    // User.belongsToMany(models.Post, {through : models.PostUser}) //for votes
    User.hasMany(models.PostUser, { foreignKey: "UserId" })
    User.hasMany(models.UserSubreddit, { foreignKey: "UserID" });
    User.hasMany(models.Post, { foreignKey: "UserID" }); //for ownership
    User.hasMany(models.Comment, { foreignKey: "UserID" });
  };
  return User;
};
