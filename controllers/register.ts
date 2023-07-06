import { Op } from "sequelize";
import { SUCCESSFULL } from "../system/constants/httpSuccessMessages";
import { User } from "../system/db/models";
import { sequelize } from "../system/db/sequelize";


export const register = async (req, res) => {
    const t = await sequelize.transaction();

    try {
        const findEmail = await User.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                    { phone_no: req.body.phoneNo }
                  ]
            },
            transaction: t, // Assign transaction to the query
        });

        if (findEmail) {
            res.json({statusCode:400,message: "Email or Phone Already Exists"})
        }

        await User.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            phone_no: req.body.phoneNo,
            gender: req.body.gender,
        },
            { transaction: t } // Assign transaction to the create operation
        );

        await t.commit(); // Commit the transaction
        
        res.json({ statusCode: 400,message: SUCCESSFULL });

    } catch (err) {
        await t.rollback(); // Rollback the transaction on error
        console.log(err)
    }
};
