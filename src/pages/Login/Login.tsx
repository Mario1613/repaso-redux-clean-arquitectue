import { getMorty } from "../../services";
import {useDispatch} from "react-redux";
import { createUser, resetUser, UserKey } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../models";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities";
import { Roles } from "../../models/roles";




const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(()=>{
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`,{ replace: true});
  },[])





  const login = async ()=>{
    try{
      const result = await getMorty();
      dispatch(createUser({...result, rol:Roles.ADMIN}))
      navigate(`/${PrivateRoutes.PRIVATE}`,{ replace: true})
    }catch(err){}
  } 
  
  return (
    <div>
      <h2>HOLA ESTE ES EL LOGIN</h2>
      <button onClick={login}>Login</button>
    </div>
  )
}
export default Login