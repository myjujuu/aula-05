const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Cinema CineStar');
});

app.get('/sobre', (req, res) => {
    res.send('Tipos de salas 3D e IMAX');
});

app.get('/filmes', (req, res) => {
    res.json([
        {
            título: 'Cidade de Deus',
            tipogenero: 'drama, crime e ação',
            duracao:`2h10m`
        },
        {
            título: 'Carandiru',
            tipogenero: 'drama, crime, retrato histórico/social',
            duracao: `2h 25m`
        },
        {
            título: 'Através da Minha Janela',
            tipogenero: 'romance e drama',
            duracao: `1h 58m`
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});