import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

  test('getHeroeById dee de retornar un héroe por Id', () => { 

      const id = 1;
      const hero = getHeroeById( id );
      
      expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

   });

   test('getHeroeById dee de retornar undefined si no existe Id', () => { 

      const id = 100;
      const hero = getHeroeById( id );
      
      //expect( hero ).toBe( undefined );
      expect( hero ).toBeFalsy();

   });

   test('getHeroesByOwner ebe de retornar un arrglo con los hérores de DC', () => { 

      const owner = 'DC';
      const heroesDC = getHeroesByOwner( owner );
      //console.log(heroesDC)
      expect( heroesDC.length ).toBe( 3 );
      expect( heroesDC ).toEqual([
        { id: 1, name: 'Batman', owner: 'DC'},
        { id: 3, name: 'Superman', owner: 'DC'},
        { id: 4, name: 'Flash', owner: 'DC'},
      ]);
      expect( heroesDC ).toEqual(heroesDC.filter( (heroe) => heroe.owner === owner ))

    });

    test('getHeroesByOwner ebe de retornar un arrglo con los hérores de DC', () => { 

      const owner = 'Marvel';
      const heroesMarvel = getHeroesByOwner( owner );
      //console.log(heroes)
      expect( heroesMarvel.length ).toBe( 2 );
      expect( heroesMarvel ).toEqual(heroesMarvel.filter( (heroe) => heroe.owner === owner ))
    });




 })