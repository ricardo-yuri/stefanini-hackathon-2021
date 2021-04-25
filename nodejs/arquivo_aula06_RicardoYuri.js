const {EventEmitter} = require('events');

const evento = new EventEmitter();

let alunos = [];

evento.on('aula06', (nome, nascimento)=>{
    alunos.push({Nome_Do_Aluno: `${nome}`, Data_De_Nascimento: `${nascimento}`});
    console.table(alunos);

});

evento.emit('aula06', 'Ricardo', '24/02/2000');
evento.emit('aula06', 'Ricardo Yuri', '24/02/2000');
evento.emit('aula06', 'Ricardo Yuri de Freitas', '24/02/2000');
evento.emit('aula06', 'Ricardo Yuri De Freitas Alves', '24/02/2000');
/**
 * Utilizando o modulo 'events', crie um objeto evento que recupere uma publicação, passando .como 
 * parâmetros o nome e a data de nascimento do aluno, e mostre no terminal, as informações 
 * recuperadas em formato de tabela
 */