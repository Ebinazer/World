import { City, Country, CountryLanguage } from "../system/db/models"

export const searchResults = async (req, res) => {
    const finalResponse = []
    try {
        const country = await Country.findOne({
            where: {
                Name: req.query.q
            }
        })

        const city = await City.findOne({
            where: {
                Name: req.query.q
            }
        })

        if (country) {
            const result: any = await Country.findOne({
                where: {
                    Name: req.query.q
                },
                include: [{
                    model: City,
                }, {
                    model: CountryLanguage
                }]
            })
            const uniqueCities = new Set();
            const uniqueLanguages = new Set();

            const cityNames = result.Cities.map(each => each.Name);
            const languageNames = result.CountryLanguages.map(each => each.Language);

            cityNames.forEach(cityName => uniqueCities.add(cityName));
            languageNames.forEach(languageName => uniqueLanguages.add(languageName));
            finalResponse.push({
                countryName: result.Name,
                city: Array.from(uniqueCities),
                language: Array.from(uniqueLanguages)
            })

            res.json({ statusCode: 200, response: finalResponse })
        } else if (city) {
            const city: any = await City.findOne({
                where: {
                    Name: req.query.q
                },
                include: [{
                    model: Country,
                    include: [{
                        model: CountryLanguage
                    }]
                }]
            })

            const uniqueLanguages = new Set();

            const languageNames = city.Country.CountryLanguages.map(each => each.Language);
            languageNames.forEach(languageName => uniqueLanguages.add(languageName));

            finalResponse.push({
                countryName: city.Country.Name,
                city: city.Name,
                language: Array.from(uniqueLanguages)
            })
            res.json({ statusCode: 200, response: finalResponse })
        } else {
            const language: any = await CountryLanguage.findOne({
                where: {
                    Name: req.query.q
                },
                include: [{
                    model: Country,
                    include: [{
                        model: City
                    }]
                }]
            })
            const uniqueCities = new Set();

            const cityNames = language.Country.Cities.map(each => each.Name);
            cityNames.forEach(cityName => uniqueCities.add(cityName));

            finalResponse.push({
                countryName: language.Country.Name,
                city: Array.from(uniqueCities),
                language: language.language
            })
            res.json({ statusCode: 200, response: finalResponse })
        }
    }
    catch (e) {
        console.log(e)
    }
}