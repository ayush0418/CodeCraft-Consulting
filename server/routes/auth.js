const router = require("express").Router();

const UserSignUpAuth = require("../Controllers/UserSignUpAuth");
const UserLoginAuth = require("../Controllers/UserLoginAuth");
const FetchUser = require("../middleware/FetchUser");
const UserOtpAuth = require("../Controllers/UserOtpAuth");
const UserResetPasswordAuth = require("../Controllers/UserResetPasswordAuth");

router.get("/test", UserSignUpAuth.testFun);
router.post("/customerSignUp", UserSignUpAuth.userSignUp);
router.post("/customerSignIn", UserLoginAuth.userSignIn);
router.post("/fetchCustomer", FetchUser, UserLoginAuth.fetchSignedInUser);
router.post("/userEmailSend", UserOtpAuth.userEmailSend);
router.post("/userOtpVerify", UserOtpAuth.userOtpVerify);
router.post("/userChangePassword", UserOtpAuth.userChangePassword);
router.post("/userResetPassword", UserResetPasswordAuth.userResetPassword);

module.exports = router;