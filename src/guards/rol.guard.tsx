import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";
import { Roles } from "../models/roles";
import { AppStore } from "../redux/store";


interface Props {
    rol:Roles
}

const RolGuard = ({rol}:Props) => {


    const userState = useSelector((store:AppStore)=>store.user);

    return userState.rol == rol ? <Outlet/> : <Navigate replace to={PrivateRoutes.PRIVATE}/>;

  return <div>rol.guard</div>
  
}
export default RolGuard