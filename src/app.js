import  express  from "express";
import dotenv from 'dotenv';
dotenv.config({path: '.env'})

let app = express();
app.use(express.json());


const port = process.env.LOCALSERVERT

app.listen(port , () => {
    console.log(`Servidor listening on ${port}`)
})
