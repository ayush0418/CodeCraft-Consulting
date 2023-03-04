const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const userResetPassword = async (req, res, next) => {
    // If there are errors return bad request and the errors
    console.log(req.body);
    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, newPassword, confirmPassword } = req.body;
    try {
        if (newPassword == confirmPassword) {
            let user1 = await user.findOne({ email });
            console.log(user1);
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(newPassword, salt);
            user1.password = secPass;
            user1.save();
            console.log(user1);
            // Create JWT Payload
            const payload = {
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
                        token: token,
                        user: payload,
                    });
                }
            );
        }
        else {
            return res.status(400).json({
                message: "Password doesn't match",
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error signing token",
        });
    }
};

module.exports = {
    userResetPassword,
};