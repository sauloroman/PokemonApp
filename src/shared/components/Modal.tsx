import React, { useContext } from "react";
import { type ContextState, PokemonContext } from "../../context/PokemonContext";
import pokemonEnd2 from '../../assets/img/pokemonEnd2.gif'

export const Modal: React.FC = () => {

  const {
    openModal,
    logoutUser,
    auth: { user }
  } = useContext<ContextState>( PokemonContext )

  return (
    <div className="modal animate__animated animate__fadeIn">
      <div className="modal__pop animate__animated animate__flipInX">
        <header className="modal__header">
          <h2 className="modal__title">
            ¿Desea reiniciar la aplicación, {user}?
          </h2>
          <i onClick={openModal} className="bx bx-x modal__icon"></i>
        </header>

        <div className="modal__buttons">
          <button onClick={logoutUser} className="btn animation">
            Sí
          </button>
          <button onClick={openModal} className="btn btn--white animation">
            No
          </button>
        </div>

        <div className="modal__image">
          <img src={pokemonEnd2} alt="Pokemon image End" />
          <small>
            <p>
              Reiniciar la aplicación implica cambiar el nombre del usuario.
            </p>{" "}
            <br />
            <p>No se podrá ingresar a menos que propocione algún nombre.</p>
          </small>
        </div>
      </div>
    </div>
  );
};
