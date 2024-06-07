const express = require("express");
const router = express.Router();
const {Auth} = require('../middleware/auth')
const {register, login, verifyUser, getUser, updateUser, resetPassword} = require('../controllers/userController');
const { generateOTP, verifyOTP } = require('../controllers/userOTPController');
const {registerMail, otpMail} = require('../controllers/mailer');

// post
router.route("/register").post(register)
router.route("/registerMail").post(registerMail)
router.route("/authenticate").post(verifyUser, (req, res) => res.end())
router.route("/login").post(verifyUser, login, generateOTP, otpMail);
router.route('/verifyOTP').post(verifyOTP)
// router.route('/otpMail').post(otpMail)
// router.route('/generateOTP').post(generateOTP)

//get
router.route('/user').get(Auth, getUser)
// router.route('/createResetSession').get(createResetSession)

//put
router.route('/updateUser').put(Auth, updateUser)
router.route('/resetPassword').put(verifyUser, resetPassword)

module.exports = router;