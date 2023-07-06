import { createTransport, Transporter } from "nodemailer";
import { google } from "googleapis"
import axios from 'axios'
import * as dotenv from 'dotenv';

dotenv.config()


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

export const sendemail = async (email: string, otp: number) => {



    let oauth2Client: any = null;

    const url = 'https://accounts.google.com/o/oauth2/token';
    const data = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`;
    let accessToken
    axios.post(url, data)
        .then(response => {
            accessToken = response.data.access_token;
            console.log(accessToken, '-----')
            // Use the access token as needed
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error
        });

    const getMailerTransport = (): Transporter => {
        // Create a node-mailer transport
        let mailerConfig: any;
        mailerConfig = {
            service: "gmail", auth: {
                type: "OAuth2",
                user: 'ebinazer711@gmail.com',
                accessToken: accessToken,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN
            }
        };

        return createTransport(mailerConfig);
    }

    const transport: any = getMailerTransport();
    await transport.sendMail({
        from: 'ebinazer711@gmail.com',
        to: email,
        subject: 'test',
        html: `<html>
        <body>
          <h1>This is your OTP</h1>
          <p> Your One-Time Password (OTP) is:${otp}</p>
          <p>Please use this OTP to Login.</p>
        </body>
        </html>`,
    }, async (error: any, info: any) => {
        if (error) {
            console.log(error, '------')
        } else {
            console.log('success')
        }
    });

    return null
}