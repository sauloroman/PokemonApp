import React, { useState } from "react";
import { useForm, type FormValidations } from "../../shared/hooks";

const formValidations: FormValidations<{ nameSearched: string }> = {
  nameSearched: [ (value: string) => value.trim().length > 2, 'Debes colocar un nombre de pokemon']
}

export const PokemonFormName: React.FC = () => {

  const { nameSearched, nameSearchedValid, isFormValid, onInputChange } = useForm({
    nameSearched: ''
  }, formValidations )
  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSearchNamePokemon = ( e: React.FormEvent ) => {
    e.preventDefault()
    setFormSubmitted( true )

    if ( !isFormValid ) return

    
  }

  return (
    <form onSubmit={onSearchNamePokemon} className="form pokemon-name__form">
      <input
        placeholder="Busca pokemon por nombre"
        className="form__input"
        autoComplete="off"
        name="nameSearched"
        value={nameSearched}
        onChange={onInputChange}
      />
      {
        (!isFormValid && formSubmitted)
        && <span className="form__span text-wrong flex flex-end">
        { nameSearchedValid }
        </span>
      }
    </form>
  );
};
