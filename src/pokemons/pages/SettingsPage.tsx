import React, { useContext, useEffect } from 'react';
import { Bar, ReturnButton } from '../../shared/components';
import { PokemonContext } from '../../context';
import type { ContextState } from '../../context/PokemonContext';
import PokemonEnd from '../../assets/img/pokemonEnd.gif';
import PokemonEnd2 from '../../assets/img/pokemonEnd2.gif'

export const SettingsPage: React.FC = () => {
  const {
    ui: { amountPokemonsPerPage, theme },
    setAmountPokemonsPerPage,
    setTheme,
  } = useContext<ContextState>(PokemonContext);

  useEffect(() => {
    localStorage.setItem('theme-pokedex', JSON.stringify(theme) )
  }, [ theme ])

  useEffect(() => {
    localStorage.setItem('amountPokemonsPerPage-pokedex', JSON.stringify(amountPokemonsPerPage) )
  }, [ amountPokemonsPerPage ])

  return (
    <div className="settings">
      <div className="bar--app">
        <Bar />
      </div>

      <div className="container">
        <div className="settings__return">
          <ReturnButton>&larr; Regresar</ReturnButton>
        </div>

        <div className="settings__container">
          <header className="settings__header">
            <i className="bx bxs-cog settings__icon"></i>
            <h2>Configuración</h2>
            <hr />
          </header>
          <div className="settings__content">
            <form className="form settings__form">
              <div className="form__field">
                <div className="form__text">
                  <i className="bx bxs-color form__icon"></i>
                  <h3>Tema</h3>
                </div>

                <div className="form__options">
                  <div className="form__inputOption">
                    <input
                      checked={theme === 'light'}
                      id="light"
                      type="radio"
                      name="theme"
                      value="light"
                      onChange={(e) => setTheme(e.target.value)}
                    />
                    <label htmlFor="light">Light</label>
                  </div>
                  <div className="form__inputOption">
                    <input
                      checked={theme === 'dark'}
                      id="dark"
                      type="radio"
                      name="theme"
                      value="dark"
                      onChange={(e) => setTheme(e.target.value)}
                    />
                    <label htmlFor="dark">Dark</label>
                  </div>
                </div>
              </div>
              <div className="form__field">
                <div className="form__text">
                  <i className="bx bxs-grid form__icon"></i>
                  <h3>Pokemons por página</h3>
                </div>

                <select
                  value={amountPokemonsPerPage}
                  onChange={(e) =>{
                    console.log(e.target.value)
                    setAmountPokemonsPerPage(Number(e.target.value))
                  }
                  }
                  className="form__select"
                >
                  <option value="">Selecciona una cantidad</option>
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                  <option value="20">20</option>
                </select>
              </div>
            </form>
            
            {
              theme === 'light'
              ? <div className="settings__image-1">
                  <img src={PokemonEnd} alt="Ghost Pokemon smiling" />
                </div>
              : <div className="settings__image-2">
                  <img src={PokemonEnd2} alt="Ghost Pokemon smiling" />
                </div>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};
