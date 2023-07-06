import { DataTypes, Model } from "sequelize";
import { makeModelOptions } from "../../helpers/makeModelOptions";
import { sequelize } from "../sequelize";

class Country extends Model {
    Code: string
    Name: string
    Continent: string
    Region: string
    SurfaceArea: number
    IndepYear: number
    Population : number
    LifeExpectancy : number
    GNP: number
    GNPOld: number
    LocalName: string
    GovernmentForm: string
    HeadOfState: string
    Capital : number
    Code2: string
}
Country.init({
    Code: {
        allowNull: false,
        type: DataTypes.STRING(3),
        primaryKey: true,
    },
    Name: {
        allowNull: false,
        type: DataTypes.STRING(52)
    },
    Continent: {
        allowNull: false,
        type: DataTypes.ENUM('Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America'),
        defaultValue: 'Asia'
    },
    Region: {
        allowNull: false,
        type: DataTypes.STRING(26)
    },
    SurfaceArea: {
        allowNull: false,
        type: DataTypes.FLOAT(10,2)
    },
    IndepYear: {
        allowNull: true,
        type: DataTypes.SMALLINT
    },
    Population: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    LifeExpectancy: {
        allowNull:true,
        type : DataTypes.FLOAT(3,1)
    },
    GNP:{
        allowNull: true,
        type: DataTypes.FLOAT(10,2)
    },
    GNPOld: {
        allowNull: true,
        type: DataTypes.FLOAT(10,2)
    },
    LocalName: {
        allowNull: false,
        type: DataTypes.STRING(45)
    },
    GovernmentForm:{
        allowNull: false,
        type: DataTypes.STRING(45)
    },
    HeadOfState:{
        allowNull: true,
        type: DataTypes.STRING(60)
    },
    Capital:{
        allowNull: true,
        type: DataTypes.INTEGER
    },
    Code2:{
        allowNull: false,
        type: DataTypes.STRING(2)
    }
}, makeModelOptions(sequelize, "country"));

export default Country;
