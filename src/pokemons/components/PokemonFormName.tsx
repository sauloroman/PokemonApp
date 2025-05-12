import React, { useState } from "react";
import { useForm, useNavPage, type FormValidations } from "../../shared/hooks";
import { useQueryClient } from "@tanstack/react-query";
import type { PokemonResult } from "../interfaces/pokemon-list.interface";

const formValidations: FormValidations<{ nameSearched: string }> = {
  nameSearched: [ (value: string) => value.trim().length > 2, 'Debes colocar un nombre de pokemon']
}

export const PokemonFormName: React.FC = () => {
  
  const queryClient = useQueryClient()
  const pokemons = queryClient.getQueryData<PokemonResult[]>(['pokemons'])

  const { nameSearched, nameSearchedValid, isFormValid, onInputChange } = useForm({
    nameSearched: ''
  }, formValidations )
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { onNavigatePage } = useNavPage()

  const onSearchNamePokemon = ( e: React.FormEvent ) => {
    e.preventDefault()
    setFormSubmitted( true )

    if ( !isFormValid ) return

    const pokemon = pokemons!.find( pokemon => pokemon.name === nameSearched )

    if ( pokemon ) {
      const pokemonId = pokemon.url.split('/')[6]
      onNavigatePage(`/pokemon/${pokemonId}`)
    } else {
      onNavigatePage(`/pokemon/not-found`)
    }
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
