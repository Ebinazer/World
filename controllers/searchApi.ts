import { Op } from "sequelize"
import { City, Country, CountryLanguage } from "../system/db/models"

export const searchApi = async (req, res) => {
    try {
        const country = await Country.findAll({
            where: {
                Name: { [Op.like]: `${req.query.q}%` }
            },
        });

        const city = await City.findAll({
            where: {
                Name: { [Op.like]: `${req.query.q}%` }
            }
        })

        const language = await CountryLanguage.findAll({
            where: {
                language: { [Op.like]: `${req.query.q}%` }
            }
        })
        const response = [];
        for (const obj of country) {
            const uniqueCities = new Set();
            const uniqueLanguages = new Set();

            const cityNames = city.map(each => each.Name);
            const languageNames = language.map(each => each.Language);

            cityNames.forEach(cityName => uniqueCities.add(cityName));
            languageNames.forEach(languageName => uniqueLanguages.add(languageName));

            response.push({
                country: obj.Name,
                city: Array.from(uniqueCities),
                language: Array.from(uniqueLanguages)
            });
        }

        if (response.length) {
            res.json({ statusCode: 200, response: response })
        }
        else {
            res.json({ statusCode: 400, response: response })
        }
    } catch (e) {
        console.log(e)
    }
}