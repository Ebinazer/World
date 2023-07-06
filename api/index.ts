import { Router } from 'express'
import { login } from '../controllers/login';
import { register } from '../controllers/register';
import { sendOtp } from '../controllers/sendOtp';
import { searchApi } from '../controllers/searchApi';
import { searchResults } from '../controllers/searchResults';
import { countryDetails } from '../controllers/countryDetails';


const router = Router()

router.post("/login", login);
router.post("/register", register)
router.get("/send-otp", sendOtp)
router.get("/serach-api", searchApi)
router.get("/search-results",searchResults)
router.get("/country-details", countryDetails)


export { router }