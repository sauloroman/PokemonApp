import React, {
  useContext,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { PokemonContext } from '../../context';
import type { ContextState } from '../../context/PokemonContext';
import type { Generation } from '../../pokemons/interfaces/pokemon-per-type.interface';

interface PaginationDto {
  setVisiblePokemons: Dispatch<SetStateAction<Generation[]>>;
}

export const Pagination: React.FC<PaginationDto> = ({ setVisiblePokemons }) => {
  const {
    ui: { amountPokemonsPerPage },
    pokemons: { page, items },
    setPokemonPage,
  } = useContext<ContextState>(PokemonContext);

  const getVisiblePokemons = () => {
    const lowerBound = amountPokemonsPerPage * (page - 1);
    const upperBound = lowerBound + amountPokemonsPerPage;
    setVisiblePokemons(items?.slice(lowerBound, upperBound));
  };

  const onPreviousPage = () => {
    window.scrollTo(0, 0);
    setPokemonPage(page - 1);
  };

  const onNextPge = () => {
    window.scrollTo(0, 0);
    setPokemonPage(page + 1);
  };

  useEffect(() => {
    getVisiblePokemons();
  }, [items]);

  useEffect(() => {
    setPokemonPage(page);
    localStorage.setItem('page', JSON.stringify(page));
    getVisiblePokemons();
  }, [page]);

  return (
    <div className='pagination__box'>
      <ul className="pagination">
        <button
          disabled={page === 1}
          onClick={onPreviousPage}
          className={`${
            page === 1 ? 'disabled' : null
          } pagination__control animation btn`}
        >
          <i className="bx bx-chevron-left pagination__icon"></i>
        </button>

        <li>{page}</li>

        <button
          disabled={page === Math.ceil(items.length / amountPokemonsPerPage)}
          onClick={onNextPge}
          className={`${
            page === Math.ceil(items.length / amountPokemonsPerPage)
              ? 'disabled'
              : null
          } pagination__control animation btn`}
        >
          <i className="bx bx-chevron-right pagination__icon"></i>
        </button>
      </ul>

      <h2 className="pagination__amount">
        Página {page} de {Math.ceil(items.length / amountPokemonsPerPage)}
      </h2>
    </div>
  );
};
