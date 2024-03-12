import jwt, { decode } from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();

// sign( { {payload} , secretCode , {expireTime} )

const token = jwt.sign(
    { email: 'anton.dumov@gmail.com', id: 15 },
    process.env.ACCESS_TOKEN_SECERT,
    { expiresIn: '1d' }
);

console.log(token);

const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudG9uLmR1bW92QGdtYWlsLmNvbSIsImlkIjoxNSwiaWF0IjoxNzEwMTc1NTkwLCJleHAiOjE3MTAyNjE5OTB9.6GLRZROJSBgV90KLaKgtY8DgyYHyIlH9Io5MVCp0A44'

/**
 * verify( token, secret, (err, decode)=> {} )
 */

jwt.verify(myToken, process.env.ACCESS_TOKEN_SECERT, (err, decode) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(decode);
    }
})