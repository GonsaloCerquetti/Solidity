var express = require('express');
var Web3 = require('web3')
var solc = require('solc')
var fs = require('fs')
var router = express.Router();

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var url = require('url-parse')

let app = require("../app")


router.get('/login', function (req, res, next) {
  res.render('login', {});
});


//Login alumno
router.post('/login/login/respuesta2', function (req, res, next) {
  global.usuario = req.body.usuario;
  global.materia = req.body.materia;
  global.profesor = req.body.profesor;
  console.log(usuario, materia, profesor)
  //console.log(app.abi)
  //console.log(app.byte)
  global.myContract = new web3.eth.Contract(app.abi, '0xa5877e9ce8fb5e87340bab7d6305e23538f1a125', { data: app.byte, gasPrice: '20000000000' }); //address del contrato
  myContract.methods.solicitar(profesor, materia).send({ from: usuario, gas: 200000 })
  res.render('respuesta', {});
});

//profesor
router.post('/login/login/respuesta3', function (req, res, next) {
  global.usuario = req.body.usuario;
  global.profesor = req.body.profesor;
  console.log(usuario, materia, profesor)

  myContract.methods.confirmar(usuario).send({ from: profesor, gas: 200000 })
  myContract.methods.estaConfirmado(usuario).call().then(e => {

        var respuesta = 'estaConfirmado(): ';
        for (let index = 0; index < e.length; index++) {
          const a = e[index];
          respuesta += a.toString();
        }
        res.send(respuesta);
      });

});

router.post("/login/respuesta", function (req, res, next) {
  global.usuario = req.body.usuario;

  switch (usuario) {
    case "1":
      res.render('loginAlumno', {});
      
      break;
    case "2":
      res.render('loginProf', {});
      
      break;

  }
});


//cuentas
router.get('/accounts', function (req, res, next) {

  web3.eth.getAccounts()
    .then(accounts => {

      var respuesta = 'Accounts en la blockchain';


      for (let index = 0; index < accounts.length; index++) {
        const a = accounts[index];

        respuesta += '<br />';
        respuesta += a.toString();
      }

      res.send(respuesta);

    });

});

//ultimo
router.get('/last', function (req, res, next) {
  web3.eth.getBlockNumber()
    .then(number => {

      res.send(number.toString());

    });
});

//Metodos

router.get('/metodos', function (req, res, next) {
  let query = url(req.url, true).query;
  res.render('metodos', {
    metodo: query.metodo
  });
});

router.post("/metodos/respuesta", function (req, res, next) {
  let metodo = req.body.metodo;
  switch (metodo) {
    case "1":
      myContract.methods.getMateria(usuario).call().then(e => {

        var respuesta = 'getMateria(): ';
        for (let index = 0; index < e.length; index++) {
          const a = e[index];
          respuesta += a.toString();
        }
        res.send(respuesta);
      });
      break;
    case "2":
      myContract.methods.getProfesor(usuario).call().then(e => {

        var respuesta = 'getProfesor(): ';
        for (let index = 0; index < e.length; index++) {
          const a = e[index];
          respuesta += a.toString();
        }
        res.send(respuesta);
      });
      break;
    case "3":
      myContract.methods.getAlumno(usuario).call().then(e => {

        var respuesta = 'getAlumno(): ';
        for (let index = 0; index < e.length; index++) {
          const a = e[index];
          respuesta += a.toString();
        }
        res.send(respuesta);
      });
      break;
    case "4":
      myContract.methods.estaConfirmado(usuario).call().then(e => {

        var respuesta = 'estaConfirmado(): ';
        for (let index = 0; index < e.length; index++) {
          const a = e[index];
          respuesta += a.toString();
        }
        res.send(respuesta);
      });
      break;
    case "5":
      myContract.methods.estaCancelado(usuario).call().then(e => {

        var respuesta = 'estaCancelado(): ';
        for (let index = 0; index < e.length; index++) {
          const a = e[index];
          respuesta += a.toString();
        }
        res.send(respuesta);

      });
      break;
    case "6":
    myContract.methods.cancelar(usuario).send({ from: usuario, gas: 200000 })
    myContract.methods.estaCancelado(usuario).call().then(e => {

      var respuesta = 'estaCancelado(): ';
      for (let index = 0; index < e.length; index++) {
        const a = e[index];
        respuesta += a.toString();
      }
      res.send(respuesta);
    });
    break;


  }

});
module.exports = router;


module.exports = router;