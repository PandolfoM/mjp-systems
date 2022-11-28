const express = require("express");
const router = express.Router();
const contactEmail = require("../models/contactEmail");
require("dotenv").config();

router.post("/resetform", (req, res) => {
  const name = req.body.name;
  const network = req.body.network;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const form = req.body.form;
  const sites = req.body.sites;

  let html;
  if (sites) {
    html = `<p>Type: ${form}</p>
    <p>Name: ${name}</p>
    <p>Network: ${network}</p>
    <p>Email: ${email}</p>
    <p>Username: ${username}</p>
    <p>Password: ${password}</p>
    <p>Sites: ${sites}</p>`;
  } else {
    html = `<p>Type: ${form}</p>
    <p>Name: ${name}</p>
    <p>Network: ${network}</p>
    <p>Email: ${email}</p>
    <p>Username: ${username}</p>
    <p>Password: ${password}</p>`;
  }

  const mail = {
    from: "MJP Systems Account Details<mattp@mjpsystems.com>",
    to: process.env.MAILLIST,
    subject: form,
    html: html,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json("error");
    } else {
      res.json("sent");
    }
  });
});

router.post("/contactform", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const phone = req.body.phone;
  const msg = req.body.msg;

  let html;

  if (!phone) {
    html = `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${msg}</p>`;
  } else {
    html = `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${msg}</p>`;
  }

  const mail = {
    from: "MJP Systems Contact Form<mattp@mjpsystems.com>",
    to: process.env.MAILLIST,
    subject: subject,
    html: html,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json("error");
    } else {
      res.json("sent");
    }
  });
});

module.exports = router;
