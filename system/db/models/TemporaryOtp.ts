import { DataTypes, Model } from "sequelize";
import { makeModelOptions } from "../../helpers/makeModelOptions";
import { sequelize } from "../sequelize";


class TemporaryOtp extends Model {
    id: number
    email: string
    otp: number
    expiresIn: Date
    
}
TemporaryOtp.init({
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30)
    },
    otp: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    expiresIn: {
        allowNull: false,
        type: DataTypes.DATE
    },
    
}, makeModelOptions(sequelize, "temporary_otp"));

export default TemporaryOtp;
