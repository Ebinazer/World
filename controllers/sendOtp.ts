import { TemporaryOtp, User } from "../system/db/models"
import moment from 'moment'
import { sequelize } from "../system/db/sequelize";
import { sendemail } from "../system/helpers/sendEmail";

export const sendOtp = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const email = await User.findOne({
            where: {
                email: req.query.email
            }, transaction: t, // Assign transaction to the query
        })

        if (!email) {
            res.json({statusCode: 400, message: "Please enter a valid Email" })
        }
        else {

            const otp = Math.floor(Math.random() * 9000) + 1000;
            const expiresIn = moment().add(2, 'minutes').format('YYYY-MM-DD HH:mm:ss')

            await TemporaryOtp.create({
                email: req.query.email,
                otp: otp,
                expiresIn: expiresIn
            }, { transaction: t })

            await sendemail(req.query.email, otp)
            await t.commit(); // Commit the transaction

            res.json({ statusCode: 200,message: "Otp Sent SuccessFully" });
        }
    } catch (err) {
        await t.rollback(); // Rollback the transaction on error
        console.log(err)
    }
}