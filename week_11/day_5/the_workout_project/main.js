import express from 'express';
import * as console from 'console';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})