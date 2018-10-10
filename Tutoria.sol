pragma solidity ^0.4.7;
contract Tutoria {
    
    struct tutoriaData{
        string materia;
        address profesor;
        address alumno;
        bool confir;
    }
    
    function pedir (string mat, address prof) public{
        tutoriaData.materia = mat;
        tutoriaData.alumno = msg.sender;
        require(msg.sender != prof);
        tutoriaData.profesor = prof;
     }
    
    mapping (address => tutoriaData) tutorias;
    
    function getMateria() public returns (string) {
        return tutoriaData.materia;
    }
    
    function getProfesor() public returns (address) {
        return tutoriaData.profesor;
    }
    
    function getAlumno() public returns (address) {
        return tutoriaData.alumno;
    }
    
    function confirmar() public returns (uint){
        tutoriaData.confir = true;
    }
    
    function confirmado() public returns (uint){
        require(tutoriaData.confir == true);
        return tutoriaData.confir;
    }
}
        return confi;
    }
}