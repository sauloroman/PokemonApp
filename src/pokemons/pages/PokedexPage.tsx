import React, { useContext } from "react";
import { Bar, Modal } from "../../shared/components";
import { PokemonContext } from "../../context";
import { type ContextState } from "../../context/PokemonContext";
import { ChooseForm } from "./ChooseForm";
import { PokemonFormName, PokemonFormTypes } from "../components";

export const PokedexPage: React.FC = () => {
  
  const {
    auth: { user },
    ui: { isModalOpen, typeSearch },
    openModal
  } = useContext<ContextState>( PokemonContext )
  
  return (
    <div className="pokedex">
      {isModalOpen && <Modal />}

      <div className="container">
        <div className="bar--app">
          <Bar />
        </div>

        <header className="pokedex__header">
          <div className="pokedex__header-first">  
            <div className="btn--box">
              <button onClick={openModal} className="btn animation btn--reset">
                <p>&larr;</p> 
                Salir
              </button>
            </div>
            <p className="pokedex__welcome">
              Bienvenido {user},{" "}
              <span>aquí podrás encontrar tu pokemon favorito</span>
            </p>
          </div>
          <ChooseForm />
        </header>

        {
          typeSearch
          ? <PokemonFormTypes />
          : <PokemonFormName />
        }

        {/* <PokemonList /> */}
      </div>
    </div>
  );
};
