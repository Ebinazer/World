import { DataTypes, Model } from "sequelize";
import { makeModelOptions } from "../../helpers/makeModelOptions";
import { sequelize } from "../sequelize";

class CountryLanguage extends Model {
    CountryCode: string
    Language: string
    IsOfficial: string
    Percentage: number
}
CountryLanguage.init({
    CountryCode: {
        allowNull: false,
        type: DataTypes.STRING(3),
        primaryKey: true,
    },
    Language: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(30)
    },
    IsOfficial: {
        allowNull: false,
        type: DataTypes.ENUM('T', 'F')
    },
    Percentage: {
        allowNull: false,
        type: DataTypes.FLOAT(4,1),
    },
    
}, makeModelOptions(sequelize, "countrylanguage"));

export default CountryLanguage;
