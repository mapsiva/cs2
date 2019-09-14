"use strict";

const { User } = require("../models");
const bcrypt = require("bcrypt");
module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        error: "Name, E-mail and Password are required!"
      });
    }

    let user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(401).json({ error: "This email already registered!" });
    }

    user = await User.create({ name, email, password });

    return res.json({
      message: "User created successfully!",
      jwt: user.generateToken()
    });
  },

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        error: "Name, E-mail and Password are required!"
      });
    }

    if (!id) return res.json({ error: "ID is missing!" });

    let user = await User.findByPk(id);

    if (!user) return res.json({ error: "User not found!" });

    await User.update({ name, email, password }, { where: { id } });

    user = await User.findByPk(id);

    user.password = undefined;

    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.params;

    if (!id) return res.json({ error: "ID is missing!" });

    let user = await User.findByPk(id);

    if (!user) return res.json({ error: "User not found!" });

    user.destroy();

    return res.json({ message: "sucess" });
  },
  async login(req, res) {
    const { password, email } = req.body;

    console.log(req.body);

    if (!email || !password)
      return res.json({ error: "E-mail/Password is missing!" });

    let user = await User.findOne({ where: { email } });

    if (!user) return res.json({ error: "User not found!" });

    if (!(await user.checkPassword(password))) {
      return res.json({ error: "Wrong password or email!" });
    }
    return res.json({ token: user.generateToken() });
  }
};
