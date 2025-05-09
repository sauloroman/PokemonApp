import { useNavigate } from "react-router-dom"

export const useNavPage = () => {

  const navigate = useNavigate()

  const onNavigatePage = ( page: string ) => {
    navigate(page)
  }

  return {
    onNavigatePage
  }

}