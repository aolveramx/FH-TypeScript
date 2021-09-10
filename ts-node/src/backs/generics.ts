import { printObject, genericFunction, genericFuncionArr } from "../generics/generics";
import { Villain, Hero } from "../interfaces";


// printObject(123)
// printObject(new Date())
// printObject({ a: 1, b: 2, c: 3})
// printObject([1,2,3,4,5,6,7,8,9,10])
// printObject('Hola Mundo')

// const name: string = 'Ari'

// console.log(genericFuncionArr(3.141618).toFixed())
// console.log(genericFuncionArr('Hola Mundo').toUpperCase())
// console.log(genericFuncionArr(new Date()).getDate())

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log(genericFuncionArr<Villain>(deadpool).dangerLevel)



