(() => {

  interface Xmen {
    name: string,
    realName: string,
    mainPower(id: number): string
  }

  interface Human {
    age: number
  }

  class Mutant implements Xmen, Human {

    constructor(
      public age: number,
      public name: string,
      public realName: string

    ){}

    mainPower(id: number) {
      return this.name + ' ' + this.realName
    }

  }

})()