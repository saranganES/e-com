const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getAllCustomers,
} = require("../controller/userController");

//register a admin
router.post("/register", registerAdmin);

//login a admin
router.post("/login", loginAdmin);

//get all users
router.get("/get-all-users", getAllCustomers);

module.exports = router;
