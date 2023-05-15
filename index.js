import express from "express";
import http from "http";
import morgan from "morgan";
import bodyParser from "body-parser";
import drinksRouter from "./routes/drinksRouter.js";
import dishesRouter from "./routes/dishesRouter.js";
import promoRouter from "./routes/PromoRouter.js";




const hostname = 'localhost';
const port = 3000;

//criar server configuration
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/drinks', drinksRouter)
app.use('/dishes', dishesRouter); 
app.use('/promos', promoRouter); 

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server used to practice REST API in NodeJS</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
