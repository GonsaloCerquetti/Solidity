pragma solidity ^0.4.7;
contract Tutoria {
    
    string materia;
    address profesor;
    address alumno;
    uint confi = 0;
    
    function pedir (string mat, address prof) public{
        materia = mat;
        alumno = msg.sender;
        require(msg.sender != prof);
        profesor = prof;
       
        
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
    
    function confirmar() public returns (uint){
        return confi=1;
    }
    
    function confirmado() public returns (uint){
        require(confi==1);
        return confi;
    }
}