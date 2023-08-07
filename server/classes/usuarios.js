

class Usuarios {

    constructor(){
        this.personas = [];
    }

    agregarPersona(id, nombre, sala){
        // Creo a una persona
        let persona = { id, nombre, sala };
        // Inserto una persona en el arreglo
        this.personas.push(persona);
        // Retorno el arreglo de personas
        return this.personas;
    }
    
    getPersona ( id ){
        //Busco el id de persona en el arreglo
        let persona = this.personas.filter( persona => persona.id === id )[0];
        //Lo retorno
        return persona;
    }

    //regresamos todas las personas
    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala( sala ){
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id){
        //Guardo la referencia de la persona que voy a borrar 
        let personaBorrada = this.getPersona(id);
        //La borramos con esta instruccion 
        this.personas = this.personas.filter( persona => persona.id != id);
        //Retornamos la persona
        return personaBorrada;
    }


}

module.exports = {
    Usuarios
}