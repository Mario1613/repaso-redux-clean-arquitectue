import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models"
import { resetUser, UserKey } from "../../redux/states/user"
import { clearLocalStorage } from "../../utilities"
const Logout = () => {

const navigate = useNavigate()
const dispatch = useDispatch()
  const logOut = ()=>{
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`,{ replace: true});

  }
  return (
    <button onClick={logOut}>
      Lo gout
    </button>
  )
}
export default Logout