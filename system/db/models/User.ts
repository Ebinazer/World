import { DataTypes, Model } from "sequelize";
import { makeModelOptions } from "../../helpers/makeModelOptions";
import { sequelize } from "../sequelize";

class User extends Model {
    id: number
    email: string
    first_name: string
    last_name: string
    gender: string
    phone_no: string
}
User.init({
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(30)
    },
    first_name: {
        allowNull: false,
        type: DataTypes.STRING(30)
    },
    last_name: {
        allowNull: false,
        type: DataTypes.STRING(30),
    },
    gender: {
        allowNull: true,
        type: DataTypes.ENUM('MALE', 'FEMALE',"OTHER"),
    },
    phone_no: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    
}, makeModelOptions(sequelize, "user"));

export default User;
