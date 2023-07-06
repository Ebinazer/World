import { DataTypes, Model } from "sequelize";
import { makeModelOptions } from "../../helpers/makeModelOptions";
import { sequelize } from "../sequelize";

class City extends Model {
    ID: number
    Name: string
    CountryCode: string
    District: string
    Population: number
}
City.init({
    ID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Name: {
        allowNull: false,
        type: DataTypes.STRING(30)
    },
    CountryCode: {
        allowNull: false,
        type: DataTypes.STRING(30)
    },
    District: {
        allowNull: false,
        type: DataTypes.STRING(30),
    },
    Population: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    
}, makeModelOptions(sequelize, "city"));

export default City;
