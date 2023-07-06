import { City, Country, CountryLanguage, TemporaryOtp, User } from "./models";

Country.hasMany(CountryLanguage, { foreignKey: 'CountryCode', sourceKey: 'Code' })
CountryLanguage.belongsTo(Country)
Country.hasMany(City, {foreignKey: 'CountryCode', sourceKey: 'Code'})
City.belongsTo(Country)
User.hasMany(TemporaryOtp,{foreignKey: 'email', sourceKey: 'email'})