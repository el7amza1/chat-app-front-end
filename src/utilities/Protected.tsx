import { Navigate } from 'react-router-dom'
import {  useAppSelector } from '../redux/hooks'

const Protected = ({children}: { children: any }) => {
  const token = useAppSelector(state=> state.token.token)
  

  return (
    <>
     { token !== "" ?  children : <Navigate to="/login" />  }
    </>
  )
}

export default Protected

// import { useNavigate } from "react-router";
// import { useAppSelector } from "../redux/hooks";
// import {Navigate } from 'react-router-dom'

// const Protected = ({ children }: { children: any }) => {
//   const token = useAppSelector((state) => state.token.token);
//   console.log(token);
  
  
//   return <>{token !== "" ? children : <Navigate to="/login"/>}</>;
// };

// export default Protected;