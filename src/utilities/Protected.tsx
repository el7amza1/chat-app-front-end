import { Navigate } from 'react-router-dom'
import {  useAppSelector } from '../redux/hooks'

const Protected = ({children}: { children: any }) => {
  const token = useAppSelector(state=> state.token.token)

  return (
    <>
     { token !== undefined ?  children : <Navigate to="/login" />  }
    </>
  )
}

export default Protected