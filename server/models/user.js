"use strict";
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
            msg: "Username cannot be empty"
          },
          len: [3, 10]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Email cannot be empty!"
          },
          isEmail: {
            msg: "Invalid email format!"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password cannot be empty!"
          }
        }
      }
    },
    { sequelize }
  );

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.UserSubreddit, { ForeignKey: "UserID" });
    User.hasMany(models.Post, { ForeignKey: "UserID" });
    User.hasMany(models.Comment, { foreignKey: "UserID" });
  };
  return User;
};
