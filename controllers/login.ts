import moment from "moment";
import { TemporaryOtp } from "../system/db/models";
import { Op } from "sequelize";

export const login = async (req, res) => {

    try {
        const otp = await TemporaryOtp.findOne({
            where: {
                email: req.body.email,
                otp: req.body.otp,
                expiresIn: {
                    [Op.gte]: moment().format('YYYY-MM-DD HH:mm:ss'),
                },
            }
        })

        if (!otp) {
            res.json({ statusCode: 400, message: 'Otp has expired Please try again' })
        }
        else res.json({ statusCode: 200, message: 'Login Successfull' })

    } catch (err) {
        console.log(err)
    }
}