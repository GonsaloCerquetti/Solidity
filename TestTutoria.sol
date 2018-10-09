pragma solidity ^0.4.7;
import "remix_tests.sol"; 
import "./tutoria.sol";

contract tutoriaTest {
   
    Tutoria tutoriaParaTest;
    
    function () {
        string memory materia = "Paradigma";
        address profesor = 0xdd870fa1b7c4700f2bd7f44238821c26f7392148;
        tutoriaParaTest = new Tutoria(materia, profesor);
    }
    
    function checkDebeCrearUnaTutoria () public {
        Assert.equal(tutoriaParaTest.getMateria(), "Paradigma", "Deberia obtener la materia de la tutoria");
        Assert.equal(tutoriaParaTest.getProfesor(), 0xdd870fa1b7c4700f2bd7f44238821c26f7392148, "Deberia obtener el profesor de la tutoria");
        Assert.equal(tutoriaParaTest.getAlumno(), 0xd5fc8fd24a8ebfe0583fca648632dac0b485992a, "Deberia obtener el alumno de la tutoria");
        
    }