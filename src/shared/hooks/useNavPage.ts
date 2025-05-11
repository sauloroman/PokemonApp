import { useNavigate, useParams } from "react-router-dom"

export const useNavPage = () => {

  const params = useParams()
  const navigate = useNavigate()

  const onNavigatePage = ( page: string ) => {
    navigate(page)
  }

  const getPokemonIdFromParams = (): string => {
    const { id } = params
    return id!
  }

  const returnPage = () => {
    navigate(-1)
  }

  return {
    onNavigatePage,
    getPokemonIdFromParams,
    returnPage,
  }

}