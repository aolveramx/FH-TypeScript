// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean,
  velocidadMaxima: number,
  acelear(): void
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Villian {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean,
}

const guason: Villian = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Villian ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Arkam {
  (ciudadanos:string[]): number
}

const ciudadGotica: Arkam = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Person {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: boolean,
  imprimirBio(): string 
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {

  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: boolean,
  ){}

    imprimirBio() {
      return `${this.nombre}, ${this.edad}, ${this.sexo}, ${this.estadoCivil} `
    }
}