(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string  = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Strength {

      acuaman = 0,
      batman = 1,
      flash = 5,
      superman = 100,

    }

    const fuerzaAcuaman: Strength.acuaman = 0;
    const fuerzaBatman: Strength.batman = 1;
    const fuerzaFlash: Strength.flash = 5;
    const fuerzaSuperman: Strength.acuaman = 100;

    console.log(fuerzaAcuaman)
  
    // Retorno de funciones
    function activar_batiseñal(): string {
      return 'Activada';
    }
  
    function pedir_ayuda(): void {
      console.log('Auxilio!')
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()