pragma solidity ^0.4.7;
contract Tutoria {
    
    string materia;
    address profesor;
    address alumno;
    
    constructor (string mat, address prof) public{
        materia = mat;
        alumno = msg.sender;
    }
    
    function getMateria() public returns (string) {
        return materia;
    }
    
    function getProfesor() public returns (address) {
        return profesor;
    }
    
    function getAlumno() public returns (address) {
        return alumno;
    }
    
    
}