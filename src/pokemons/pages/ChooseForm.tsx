import React, { useContext } from "react";
import { useNavPage } from "../../shared/hooks";
import PokeBall from "../../assets/img/pokebola.png";
import { PokemonContext } from "../../context";
import type { ContextState } from "../../context/PokemonContext";

export const ChooseForm: React.FC = () => {
  
  const { ui: {typeSearch}, setTypeSearch } = useContext<ContextState>( PokemonContext )
  const { onNavigatePage } = useNavPage();

  return (
    <header className="choose__header">
      <div className="choose__search">
        <button
          onClick={() => setTypeSearch(!typeSearch)}
          className={`${typeSearch ? "active-btn" : null} animation btn-switch`}
        ></button>
        <p>Busqueda</p>
      </div>

      <div className="choose__imgBox">
        <img
          onClick={() => onNavigatePage("/settings")}
          title="Configuración"
          className="rotate"
          src={PokeBall}
          alt="Pokeball"
        />
        <p>Configuracion</p>
      </div>
    </header>
  );
};
