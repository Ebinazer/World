import { Country } from "../system/db/models"

export const countryDetails = async (req, res) => {
    console.log(req.query.country)
    try {
        const country = await Country.findOne({
            where: {
                Name: req.query.country
            }
        })
        res.json({statusCode:200, response: country})
    } catch (e) {
        console.log(e)
    }
}