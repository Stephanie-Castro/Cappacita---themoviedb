const express = require('express');
const app = express();
const dataBase = require('./database/databaseKnex');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });
  

app.get('/infoApi', async (req, res) => {
    res.send(await dataBase.getAllInfoApi());
});

app.get('/infoApi/:id', async (req, res) => {
    res.send(await dataBase.getInfoApiById(req.params.id));
});

app.delete('/deleteInfoApi/:id', async (req, res) => {
    res.send(await dataBase.deleteInfoApi(req.params.id));
});

app.post('/infoApi', async (req, res) => {
    const insertInfo = await dataBase.insertInfoApi({
        api_used_type: req.body.api_used_type,
        url_accessed: req.body.url_accessed,
        amount_itens_api_returned: req.body.amount_itens_api_returned,
        api_status_returned: req.body.api_status_returned,
    });

    res.send(insertInfo);
});






app.post('/infoRateApi', async (req, res) => {
    const insertInfo = await dataBase.insertInfoRateApi({
        api_rated_type: req.body.api_rated_type,
        url_accessed: req.body.url_accessed,
        guest_session_id: req.body.guest_session_id,
        movie_id: req.body.movie_id,
        rate: req.body.rate,
        api_status_returned: req.body.api_status_returned,
    });

    res.send(insertInfo);
});

app.put('/infoRateApi/:id', async (req, res) => {
    const insertInfo = await dataBase.updateInfoRateApi(req.params.id, {
        rate: req.body.rate,
    });

    res.send(insertInfo);
});

app.get('/infoRateApi/:api_rated_type/:movie_id/:guest_session_id', async (req, res) => {
    res.send(await dataBase.checkIfGuestAlrealdyRatedMovie(req.params.api_rated_type, req.params.movie_id, req.params.guest_session_id));
});







app.listen(3003);