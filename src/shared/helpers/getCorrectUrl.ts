export const getCorrectUrl = ( search: string ) => {
  const url = 
    search 
    ? `https://pokeapi.co/api/v2/type/${search}`
    : 'https://pokeapi.co/api/v2/pokemon/?limit=400'
  return url
}
