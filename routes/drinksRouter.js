import express from 'express';
import bodyParser from 'body-parser';

const drinksRouter = express.Router();

drinksRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res, next) => {
    res.end('Enviarei seu pedido completo!')
})

.post((req, res, next) => {
    res.statusCode = 201;
    res.end('Adicionarei o pedido: ' + req.body.name + ' com os detalhes: ' + req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('A operacao PUT nao e permitida em /drinks');
})

.delete((req, res, next) => {
    res.statusCode = 204;
    console.log('Deletando todas refeicoes');
    res.end('');
});

drinksRouter.route('/:drinksId')
.get((req, res, next) => {
    res.end('Enviarei os detalhes de seu pedido: ' + req.params.drinksId + ' para você!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('A opereracao POST nao e suportada em /drinks/' + req.params.drinksId);
})
.put((req, res, next) => {
    res.write('Atualizando pedido: ' + req.params.drinksId + '\n');
    res.end('Ira atualizar o pedido: ' + req.body.name + ' com os detalhes: ' + req.body.description);
})
.delete((req, res, next) => {
    res.statusCode = 204;
    res.end('');
});

export default drinksRouter;