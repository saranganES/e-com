const bcrypt = require('bcryptjs');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
const { signInToken } = require('../config/auth');
const Admin = require('../models/UserModel');

const registerAdmin = async (req, res) => {
  try {
    const isAdded = await Admin.findOne({ email: req.body.email });
    if (isAdded) {
      return res.status(403).send({
        message: 'This Email already Added!',
      });
    } else {
      const newStaff = new Admin({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        country: req.body.country,
        city: req.body.city,
        phone: req.body.phone,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password),
      });
      const staff = await newStaff.save();
      const token = signInToken(staff);
      res.send({
        message: 'User Added Successfully',
        status: true,
        results: {
          token,
          _id: staff._id,
          name: staff.name,
          email: staff.email,
          role: staff.role,
          joiningData: Date.now(),
        },
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (admin && bcrypt.compareSync(req.body.password, admin.password)) {
      const token = signInToken(admin);
      console.log('token', token);
      res.send({
        message: 'Login Successfully',
        status: true,
        results: {
          token,
          _id: admin._id,
          name: admin.name,
          phone: admin.phone,
          email: admin.email,
          role: admin.role,
        },
      });
    } else {
      res.send({
        message: 'Invalid Email or password!',
        status: false,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const users = await Admin.find({ role: 'User' }).sort({ _id: -1 });
    res.send({ results: { users } });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAllCustomers,
};
