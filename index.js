const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// importando rotas
const especialidadeRoutes = require("./src/routes/especialidadeRoutes");


// middlewares = interceptadores
app.use(express.json()); // converte o corpo da requisição em json
app.use(cors()); // liberar requisições que vierem de outro domínio

// routes/endpoints = rotas 
app.get("/", (req, res) => {
    res.send("Olá mundo");
});

app.get("/boas-vindas", (req, res) => {
    res.send(`Seja bem-vindo`);
});

app.use("/especialidades", especialidadeRoutes);

app.get("/boas-vindas/:nome", (req, res) => {
    res.send(`Seja bem-vindo ${req.params.nome}`);
});

app.listen(port, () => {
    console.log(`Servidor de pé: http://localhost:${port}`);
})