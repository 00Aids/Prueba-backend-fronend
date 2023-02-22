import  express  from "express";
import dotenv from 'dotenv';
import router from "../routes/Usuario.routes.js";
dotenv.config({path: '.env'})

let app = express();
app.use(express.json());
app.use(router)



const port = process.env.LOCALSERVERT

app.listen(port , () => {
    console.log(`Servidor listening on ${port}`)
})
