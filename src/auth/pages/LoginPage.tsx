import React, { useContext, useState } from "react";
import { Bar } from "../../shared/components";
import { useForm, useNavPage, type FormValidations } from "../../shared/hooks";

import PokemonLettering from '../../assets/img/pokedex__title.png'
import pokemonGifLogin from '../../assets/img/pokemonGifLogin.gif'
import { PokemonContext } from "../../context";
import { type ContextState } from "../../context/PokemonContext";
// import pokemonGifLoginDark from '../../assets/img/pokemonGifLoginDark.gif'

const formData = {
  username: '',
}

const formValidations: FormValidations<typeof formData> = {
  username: [ (value: string) => value.trim().length > 2, 'El nombre es necesario']
}

export const LoginPage: React.FC = () => {

  const { loginUser } = useContext<ContextState>(PokemonContext)

  const {
    isFormValid,
    onInputChange,
    onResetForm,
    username,
    usernameValid
  } = useForm( formData, formValidations )
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { onNavigatePage } = useNavPage()

  const onSetUserName = ( e: React.FormEvent ) => {
    e.preventDefault()
    setFormSubmitted( true )

    if ( !isFormValid ) return

    loginUser( username )
    onNavigatePage('/')
    onResetForm()
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__top">
          <img
            className="login__image animate__animated animate__fadeInDown"
            src={PokemonLettering}
            alt="Pokemon lettering"
          />
        </div>

        <div className="login__text">
          <h1 className="login__title animate__animated animate__fadeInLeft">
            ¡Hola entrenador!
          </h1>
          <p className="animate__animated animate__fadeInRight">
            Para poder comenzar, dame tu nombre
          </p>
        </div>

        <form
          onSubmit={onSetUserName}
          className="form login__form animate__animated animate__fadeInUp"
        >
          <div className="form__field">
            <input
              className="form__input"
              name="username"
              value={username}
              onChange={onInputChange}
              autoComplete="off"
              placeholder="Tu nombre"
              type="text"
            />
            <span className={`form__span ${!isFormValid && formSubmitted ? 'text-wrong' : null}`}>{usernameValid}</span>
          </div>
          <div className="login__button">
            <button className="btn animation">Comenzar</button>
          </div>
        </form>

        <div className="login__gif-1">
          <img src={pokemonGifLogin} alt="Pokemon peleando" />
        </div>
        {/* <div className="login__gif-2">
          <img src={pokemonGifLoginDark} alt="Pokemon peleando" />
        </div> */}
      </div>

      <div className="bar--login">
        <Bar />
      </div>
    </div>
  );
};
