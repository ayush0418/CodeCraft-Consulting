const userOtp = require("../models/userOtp");
const users = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const userEmailSend = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    let success = false;
    let otpSuccess = false;

    let user1 = await users.findOne({ email: req.body.email });
    if (!user1) {
        console.log("Enter a Valid Email");
        return res.status(400).json({ success, err: "No user of this mail exits" });
    }
    const salt = await bcrypt.genSalt(10);

    try {
        let user1 = await userOtp.findOne({ email: req.body.email });
        if (user1) {
            return res.status(400).json({
                message: "OTP already sent",
                otpSuccess: true,
            });
        }

        let otpCode = Math.floor((Math.random() * 10000) + 1);
        console.log("otpcode: " + otpCode);
        let user = await userOtp.create({
            email: req.body.email,
            code: otpCode,
            expireIn: new Date().getTime(),
        });

        // Create JWT Payload
        const payload = {
            id: user.id,
            name: user.name,
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15m" },
            (err, token) => {
                if (err) {
                    return res.status(500).json({
                        message: "Error signing token",
                    });
                }

                resObj = {
                    success: true,
                    message: "User Added Successfully",
                    jwtToken: token,
                    user: payload,
                };
            }
        );
        try {
            await user
                .save()
                .then((userOtp) => {
                    console.log(userOtp);
                    res.set({
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    });
                    res.json(resObj);
                })
                .catch((error) => {
                    console.log(error);
                    res.json({
                        message: "An error occured while saving the user!",
                    });
                });
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Some error occured skipped mongo!");
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error signing token",
        });
    }
};

const userOtpVerify = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, otp } = req.body;
    try {
        console.log(req.body);
        let success = false;
        let otpSuccess = false;

        let user1 = await userOtp.findOne({ email });
        console.log(user1);
        if (!user1) {
            console.log("Enter a Valid Email");
            return res.status(400).json({ success, err: "No user of this mail exits" });
        }
        // const salt = await bcrypt.genSalt(10);

        if (otp == user1.code) {
            // Create JWT Payload
            const payload = {
                code: user1.code,
                email: user1.email,
            };
            console.log(payload);
            jwt.sign(
                payload,
                process.env.JWT_SECRET_KEY,
                { expiresIn: "15m" },
                (err, token) => {
                    if (err) {
                        return res.status(500).json({
                            message: "Error signing token",
                        });
                    }
                    return res.status(200).json({
                        success: true,
                        message: "Correct Otp",
                        token: token,
                        user: payload,
                    });
                }
            );
        }
        else {
            return res.status(400).json({
                message: "Incorrect OTP",
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error signing token",
        });
    }
}



const userChangePassword = async (req, res, next) => { }










// ........................................................................................................................ //
// const Users = require("../models/user");
// const userOtp = require("../models/userOtp");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { body, validationResult } = require("express-validator");

// const userEmailSend = async (req, res, next) => {
//     let data = await Users.findOne({email:req.body.email});
//     console.log(data);
//     const responseType = {};
//     if(data){
//         let otpCode = Math.floor((Math.random()*10000) +1);
//         let otpData = await userOtp.create({
//             email: req.body.email,
//             code: otpCode,
//             expireIn: new Date().getTime() + 300*1000,
//         });
//         // mailer(); 
//         responseType.statusText = 'Success'
//         responseType.message = 'Please check your Email Id';
//     }
//     else{
//         responseType.statusText = 'Error'
//         responseType.message = 'Email Id not Exist';
//     }
//     res.status(200).json(responseType);
// }

// const userChangePassword = async (req, res, next) => {
//     let data = await userOtp.find({email:req.body.email, code:req.body.otpCode});
//     const response = {}
//     if(data){
//         let currentTime = new Date().getTime();
//         let diff = data.expireIn - currentTime;
//         if(diff < 0){
//             response.message = 'Token Expired';
//             response.statusText = 'error';
//         }
//         else{
//             let user = await Users.findOne({email:req.body.email});
//             user.password = req.body.password;
//             user.save();
//             response.message = 'Password changed successfully';
//             response.statusText = 'Success';
//         }
//     }
//     else{
//         response.message = 'Invalid Otp';
//         response.statusText = 'error';
//     }
//     res.status(200).json(response);
// }

// const mailer = (email,otp) =>{
//     var nodemailer = require('nodemailer');
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         port: 587,
//         secure: false,
//         auth: {
//             user: '',
//             pass:''
//         }
//     });
//     var mailOptions = {
//         from: ' '
//     }
// }

module.exports = {
    userEmailSend,
    userOtpVerify,
    userChangePassword,
};
