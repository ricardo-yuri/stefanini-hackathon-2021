const http = require('http');

const host = '127.0.0.1';
const port = '9876';
const url = `http://${host}:${port}`;

const server = http.createServer((req, resp)=>{
    resp.statusCode = 200;
    resp.setHeader('Content-type', 'text/html');
    resp.end('<meta charset="utf-8"><h1>Ricardo Yuri de Freitas Alves</br><h2>Quero aprender o que é necessario para criar uma aplicação utilizando nodeJs</h2></h1>');
});

server.listen(port, host, ()=>{
    console.log(`Server: ${url} is runing.....`);
});

/**
 * Utilizando o modulo 'http', crie um servidor web, utilizando a porta 9876, 
 * com código de resposta 200, mostrando no navegador o seu nome e 
 * o que vc espera aprender no curso de node JS, utilizando tags HTML, 
 * formatado conforme sua escolha.

Precisamos também mostrar uma mensagem no terminal, informando o endereço completo que o 
servidor web esta sendo executado.
 */