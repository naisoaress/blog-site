// Importa o Express (a ferramenta que cria o servidor)
const express = require("express");

// Cria o servidor
const app = express();
app.use(express.urlencoded({ extended: true }));

let users = [];

// Guarda quem está logado agora (começa ninguém)
let currentUser = null;

// Rota da página inicial: quando acessar "/", mostra o index.html
app.get("/", (req, res) => {
        res.sendFile(__dirname + "/views/index.html");
});

// Rota do login
app.get("/login", (req, res) => {
        res.sendFile(__dirname + "/views/login.html");
});

// Rota do cadastro
app.get("/sign-up", (req, res) => {
        res.sendFile(__dirname + "/views/sign-up.html");
});

// Quando o formulário de cadastro for enviado...
app.post("/sign-up", (req, res) => {
    // Adiciona o novo usuário na lista
    users.push({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    // Mostra a lista no terminal (para conferir)
    console.log(users);

    // Manda a pessoa para a página de login
    res.redirect("/login");
});

// Quando o formulário de login for enviado...
app.post("/login", (req, res) => {
    // Procura na lista um usuário com esse username
    const user = users.find(u => u.username === req.body.username);

    // Se não achou OU a senha está errada → volta para o login
    if (!user || user.password !== req.body.password) {
        console.log("Login failed");
        return res.redirect("/login");
    }

    // Deu certo! Guarda quem logou e vai para a Home
    currentUser = user;
    console.log("Logged in as:", currentUser.username);
    res.redirect("/");
});

// Liga o servidor na porta 3000
app.listen(3000);