const express = require('express');
const server = express();
server.use(express.json());

let usuarios = [];



server.post('/usuarios', (req, res) => {
  let nome = req.body.nome;
  let idade = req.body.idade;
  let id = usuarios.length + 1;
  let cursos = req.body.cursos;

  usuarios.push({
    id,
    nome,
    idade,
    cursos,
  });

  return res.status(201).json(usuarios);
});

server.get('/usuarios', (req, res) => {
  return res.status(200).json(usuarios);
});

server.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const idade = req.body.idade;

  usuarios[id - 1].idade = idade;

  return res.status(201).json(usuarios);
});

server.delete('/usuarios/:id', (req, res) => {
  let id = req.params.id;

  let indice = -1;

  usuarios.map((usuario, index) => {
    if (usuario.id === Number(id)) {
      indice = index;
    }
    return usuario;
  });

  if (indice === -1) {
    return res.status(400).json({ error: 'Não existe nenhum usuario com esse identificador! ' });
  }

  usuarios.splice(indice, 1);

  return res.status(200).send();
});

/*
    Listar os cursos 
*/
server.get('/usuarios/:id/cursos', (req, res) => {
  const idFiltrado = usuarios.filter((usuario)=> {
    return usuario.id == req.params.id;
  })
  const cursosDoUsuario = idFiltrado.map((usuario)=>{
    return usuario.cursos;
  });
  
  return res.status(200).json(cursosDoUsuario);
  // TODO implementar
});

/*
    Incluir um curso 
*/
server.post('/usuarios/:id/cursos', (req, res) => {
  const idFiltrado = usuarios.filter((usuario)=> {
    return usuario.id == req.params.id;
  })

  let usuarioFiltrado;
  idFiltrado[0] ? usuarioFiltrado = idFiltrado[0] : usuarioFiltrado = null; //Ternario

  if(usuarioFiltrado === null){
    return res.status(404).json({
      status: 404,
      msg : "Usuario não encontrado"
    });
  }
  const cursos = req.body.cursos;
  usuarioFiltrado.cursos.push(cursos);
  return res.status(201).json(usuarioFiltrado);
});

/*
    Alterar um curso 
*/
server.put('/usuarios/:id/cursos/:idCurso', (req, res) => {
  const idFiltrado = usuarios.filter((usuario)=> {
    return usuario.id == req.params.id;
  })

  let usuarioFiltrado;
  idFiltrado[0] ? usuarioFiltrado = idFiltrado[0] : usuarioFiltrado = null; //Ternario

  if(usuarioFiltrado === null){
    return res.status(404).json({
      status: 404,
      msg : "Usuario não encontrado"
    });
  }

  const cursoFiltrado = idFiltrado.filter((usuario)=> {
    return usuario.cursos.id == req.params.idCurso;
  })
  console.log(cursoFiltrado);
  //console.log(idFiltrado);
});

/*
    Deletar um curso 
*/
server.delete('/usuarios/:id/curso/:id', (req, res) => {
  const idFiltrado = usuarios.filter((usuario)=> {
    return usuario.id == req.params.id;
  })

  let usuarioFiltrado;
  idFiltrado[0] ? usuarioFiltrado = idFiltrado[0] : usuarioFiltrado = null; //Ternario

  if(usuarioFiltrado === null){
    return res.status(404).json({
      status: 404,
      msg : "Usuario não encontrado"
    });
  }
  
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/ ');
});

/**
 * server.delete('/usuarios/:id/cursos/:id', (req, res) => {
  const idFiltrado = usuarios.filter((usuario)=> {
    return usuario.id == req.params.id;
  })

  let usuarioFiltrado;
  idFiltrado[0] ? usuarioFiltrado = idFiltrado[0] : usuarioFiltrado = null; //Ternario

  if(usuarioFiltrado === null){
    return res.status(404).json({
      status: 404,
      msg : "Usuario não encontrado"
    });
  }

  let indice = -1;

  usuarioFiltrado.map((usuario, index) => {
    if (usuarioFiltrado.id === Number(id)) {
      indice = index;
      usuarioFiltrado.curso = ""
    }
    return usuarioFiltrado.cursos;
  });
  console.log(usuarios.splice(indice, 1));
  console.log(cursos.splice(indice, 1));
});
 */