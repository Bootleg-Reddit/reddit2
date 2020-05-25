const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class Users {
  static list(req, res) {
    User.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static register(req, res) {
    if (req.body.email == undefined || req.body.email == null)
      res.status(400).json({ error: "email harus diisi" });
    User.findAll({
      where: { email: req.body.email },
    })
      .then((dataUser) => {
        if (dataUser.length === 0) {
          return User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          });
        } else {
          res.status(400).json({ error: "email sudah terdaftar" });
        }
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        let error = "";
        if (err.name === "SequelizeValidationError") {
          for (let i = 0; i < err.errors.length - 1; i++) {
            error += `${err.errors[i].message} & `;
          }
          error += `${err.errors[err.errors.length - 1].message}`;
          res.status(400).json({ error });
        } else {
          console.log(err);
          res.status(500).json({ error: "internal server error" });
        }
      });
  }

  static login(req, res) {
    if (req.body.email == undefined || req.body.email == null)
      res.status(400).json({ error: "email harus diisi" });
    else if (req.body.password == undefined || req.body.password == null)
      res.status(400).json({ error: "password harus diisi" });

    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((dataUser) => {
        if (!dataUser) {
          res.status(400).json({ error: "email belum terdaftar" });
        } else {
          const isPassword = checkPassword(
            req.body.password,
            dataUser.password
          );
          //console.log(isPassword);
          if (!isPassword) {
            res.status(400).json({ error: "password salah" });
          } else {
            const token = jwt.sign(
              {
                userId: dataUser.id,
                username: dataUser.username,
                email: dataUser.email,
              },
              process.env.JWT_SECRET
            );
            res.status(201).json(
              { token, 
                username: dataUser.username ,
                email: dataUser.email
              }
            );
          }
        }
      })
      .catch((err) => {
        //console.log(err);
        res.status(500).json({ error: "internal server error" });
      });
  }
}

module.exports = Users;
