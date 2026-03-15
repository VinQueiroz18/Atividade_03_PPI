import express from 'express';

const host = '0.0.0.0';
const porta = 3000; 

const app = express();
var listaFornecedores = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cadastro de Fornecedores</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Sistema</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        Cadastros
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Cadastrar Cliente</a></li>
                                        <li><a class="dropdown-item" href="/fornecedores">Cadastrar Fornecedor</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="/lista_fornecedores">Fornecedores Cadastrados</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto align-items-center">
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                                <li class="nav-item ms-2">
                                    <a href="/logout" class="btn btn-light btn-sm">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h1 style="margin-top: 50px; text-align: center;">Bem vindo a página de Cadastro de Fornecedores!!!</h1>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            </body>
        </html>
        `);
    res.end();
});

app.get('/fornecedores', (req, res) => {

    res.write(`
        
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Fornecedores</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sistema</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Cadastros
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Cadastrar Cliente</a></li>
                                    <li><a class="dropdown-item" href="/fornecedores">Cadastrar Fornecedor</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="/lista_fornecedores">Fornecedores Cadastrados</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto align-items-center">
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a href="/logout" class="btn btn-light btn-sm">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-4">
                <h3 class="mb-4">Cadastro de Fornecedores</h3>
                <form method="POST" action="/fornecedores">
                    <div class="mb-3">
                        <label class="form-label">CNPJ</label>
                        <input type="text" class="form-control" name="cnpj">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Razão Social</label>
                        <input type="text" class="form-control" name="razaoSocial">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nome Fantasia</label>
                        <input type="text" class="form-control" name="nomeFantasia">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" name="email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Telefone</label>
                        <input type="text" class="form-control" name="telefone">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Endereço</label>
                        <input type="text" class="form-control" name="endereco">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Cidade</label>
                        <input type="text" class="form-control" name="cidade">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Estado</label>
                        <select class="form-select" name="estado">
                            <option selected disabled>Escolha...</option>
                            <option>AC</option>
                            <option>AL</option>
                            <option>AP</option>
                            <option>AM</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MT</option>
                            <option>MS</option>
                            <option>MG</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PR</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RS</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>SC</option>
                            <option>SP</option>
                            <option>SE</option>
                            <option>TO</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">CEP</label>
                        <input type="text" class="form-control" name="cep">
                    </div>
                    <button class="btn btn-primary" type="submit">Cadastrar</button>
                </form>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
        `);
    res.end();
});

app.post('/fornecedores', (req, res) => {
    
    const cnpj = req.body.cnpj;
    const razaoSocial = req.body.razaoSocial;
    const nomeFantasia = req.body.nomeFantasia;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const cep = req.body.cep;

    if(!cnpj || !razaoSocial || !nomeFantasia || !email || !telefone || !endereco || !cidade || !estado || !cep) {
        
        let html = `
        
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Fornecedores</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sistema</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Cadastros
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Cadastrar Cliente</a></li>
                                    <li><a class="dropdown-item" href="/fornecedores">Cadastrar Fornecedor</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="/lista_fornecedores">Fornecedores Cadastrados</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto align-items-center">
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a href="/logout" class="btn btn-light btn-sm">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-4">
                <h3 class="mb-4">Cadastro de Fornecedores</h3>
                <form method="POST" action="/fornecedores">
                    <div class="mb-3">
                        <label class="form-label">CNPJ</label>
                        <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}">`;

                        if(!cnpj) {
                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe o CNPJ
                            </div>
                            `;
                        }

                        html+=`

                    </div>
                    <div class="mb-3">
                        <label class="form-label">Razão Social</label>
                        <input type="text" class="form-control" id="razaoSocial" name="razaoSocial" value="${razaoSocial}">`;

                        if(!razaoSocial) {

                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe a Razão Social
                            </div>
                            `
                        };

                        html+=`

                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nome Fantasia</label>
                        <input type="text" class="form-control" id="nomeFantasia" name="nomeFantasia" value="${nomeFantasia}">`;

                        if(!nomeFantasia) {

                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe o Nome Fantasia
                            </div>
                            `
                        };

                        html+=`
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" value="${email}">`;

                        if(!email) {

                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe o Email
                            </div>
                            `
                        };

                        html+=`
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Telefone</label>
                        <input type="text" class="form-control" id="telefone" name="telefone" value="${telefone}">`;

                        if(!telefone) {

                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe o Telefone
                            </div>
                            `
                        };

                        html+=`
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="endereco" name="endereco" value="${endereco}">`;

                        if(!endereco) {

                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe o Endereço
                            </div>
                            `
                        };

                        html+=`
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}">`;

                        if(!cidade) {

                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe a Cidade
                            </div>
                            `
                        };

                        html+=`
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Estado</label>
                        <select class="form-select" id="estado" name="estado">`;

                        if(!estado) {

                            html += `
                            <option selected disabled>Escolha...</option>
                            `
                        };
                        if(estado === "BA") {
                            html += `<option selected>BA</option>`;
                        } else {
                            html += `<option>BA</option>`;
                        }
                        if(estado === "DF") {
                            html += `<option selected>DF</option>`;
                        } else {
                            html += `<option>DF</option>`;
                        }
                        if(estado === "GO") {
                            html += `<option selected>GO</option>`;
                        } else {
                            html += `<option>GO</option>`;
                        }
                        if(estado === "MG") {
                            html += `<option selected>MG</option>`;
                        } else {
                            html += `<option>MG</option>`;
                        }
                        if(estado === "PR") {
                            html += `<option selected>PR</option>`;
                        } else {
                            html += `<option>PR</option>`;
                        }
                        if(estado === "RJ") {
                            html += `<option selected>RJ</option>`;
                        } else {
                            html += `<option>RJ</option>`;
                        }
                        if(estado === "SP") {
                            html += `<option selected>SP</option>`;
                        } else {
                            html += `<option>SP</option>`;
                        }
                        html+=`
                        </select>`;
                        if(!estado) {

                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe o Estado
                            </div>
                            `
                        };

                        html+=`
                    </div>
                    <div class="mb-3">
                        <label class="form-label">CEP</label>
                        <input type="text" class="form-control" id="cep" name="cep" value="${cep}">`;

                        if(!cep) {

                            html += `
                            <div class="alert alert-danger" role="alert">
                                Por favor, informe o CEP
                            </div>
                            `
                        };

                        html+=`
                    </div>
                    <button class="btn btn-primary" type="submit">Cadastrar</button>
                </form>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
        
        `;

        res.write(html);
        res.end();

    } else {

        listaFornecedores.push({
            "cnpj": cnpj,
            "razaoSocial": razaoSocial,
            "nomeFantasia": nomeFantasia,
            "email": email,
            "telefone": telefone,
            "endereco": endereco,
            "cidade": cidade,
            "estado": estado,
            "cep": cep
        });
    res.redirect('/lista_fornecedores');
    }

});

app.get('/lista_fornecedores', (req, res) => {

    res.write(`
        
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cadastro de Fornecedores</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Sistema</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        Cadastros
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Cadastrar Cliente</a></li>
                                        <li><a class="dropdown-item" href="/fornecedores">Cadastrar Fornecedor</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="/lista_fornecedores">Fornecedores Cadastrados</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto align-items-center">
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                                <li class="nav-item ms-2">
                                    <a href="/logout" class="btn btn-light btn-sm">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container mt-5">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">CNPJ</th>
                            <th scope="col">Razão Social</th>
                            <th scope="col">Nome Fantasia</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">CEP</th>
                        </tr>
                    </thead>
                    <tbody>
                `);

                for (let i = 0; i<listaFornecedores.length; i++) {
                    
                    const empresa = listaFornecedores[i];
                    res.write(`
                        <tr>
                            <td>${empresa.cnpj}</td>
                            <td>${empresa.razaoSocial}</td>
                            <td>${empresa.nomeFantasia}</td>
                            <td>${empresa.email}</td>
                            <td>${empresa.telefone}</td>
                            <td>${empresa.endereco}</td>
                            <td>${empresa.cidade}</td>
                            <td>${empresa.estado}</td>
                            <td>${empresa.cep}</td>
                        </tr>
                    `);
                }
                res.write(`
                    </tbody>
                </table>
                <a href="/fornecedores" class="btn btn-primary">Continuar Cadastrando</a>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            </body>
        </html>
        `);
        res.end();
});

app.get("/login", (requisicao, resposta) => {

    resposta.write(`

        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <title>Login</title>
        </head>
        <body class="bg-light d-flex align-items-center justify-content-center vh-100">
            <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
                <h3 class="text-center mb-4">Login</h3>
                <form method="post" action="/login">
                    <div class="mb-3">
                        <label class="form-label">Usuário</label>
                        <input type="text" class="form-control" name="usuario">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Senha</label>
                        <input type="password" class="form-control" name="senha">
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </div>
                </form>
                <div class="text-center mt-3">
                    <small class="text-muted">Não tem conta? <a href="#">Cadastre-se</a></small>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `);

    resposta.end();
});

app.post("/login", (req, res) => {

    let usuario = req.body.usuario;
    let senha = req.body.senha;

    const usuarioValido = "admin";
    const senhaValida = "123456";

    if(!usuario || !senha) {

        let html = `
            <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <title>Login</title>
        </head>
        <body class="bg-light d-flex align-items-center justify-content-center vh-100">
            <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
                <h3 class="text-center mb-4">Login</h3>
                <form method="post" action="/login">
                    <div class="mb-3">
                        <label class="form-label">Usuário</label>
                        <input type="text" class="form-control" name="usuario">`;

                        if(!usuario) {

                            html+=`
                                <div class="alert alert-danger mt-2" role="alert">
                                    Digite o nome de usuário
                                </div>
                            `;
                        }
                        html+=`
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Senha</label>
                        <input type="password" class="form-control" name="senha">`;

                        if(!senha) {

                            html+=`
                                <div class="alert alert-danger mt-2" role="alert">
                                    Digite a senha
                                </div>
                            `;
                        }
                        html+=`
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </div>
                </form>
                <div class="text-center mt-3">
                    <small class="text-muted">Não tem conta? <a href="#">Cadastre-se</a></small>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
        `;
        res.write(html);
        res.end();
    } else if(usuario !== usuarioValido || senha !== senhaValida) {

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sistema</a>
                </div>
            </nav>

            <div class="container mt-5">
                <div class="alert alert-danger text-center">
                    <h4>Usuário ou senha inválidos!</h4>
                </div>
                <div class="text-center">
                    <a href="/login" class="btn btn-primary">Voltar para Login</a>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `);

} else {

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sistema</a>
                </div>
            </nav>

            <div class="container mt-5">
                <div class="alert alert-success text-center">
                    <h4>Login realizado com sucesso!</h4>
                </div>
                <div class="text-center">
                    <a href="/" class="btn btn-primary">Ir para Home</a>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `);
}

});

app.get("/logout", (req, res) => {

    res.write(`
        
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cadastro de Fornecedores</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
            </head>
            <body>
                <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body py-4" data-bs-theme="dark">
                    <div class="container-fluid h-100">
                    </div>
                    </nav>
                <h1 style="margin-top: 50px; text-align: center;">Logout realizado com sucesso!!!</h1>
                <div class="d-flex justify-content-center pt-5">
                    <a href="/login" class="btn btn-primary">Voltar para Login</a>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            </body>
        </html>
        `);
        res.end(); 
});

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});