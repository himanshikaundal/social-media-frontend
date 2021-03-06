
import { useLocation ,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";


const RequireAuth=({ children })=> {
  const require=useSelector(state=>state.loginUser);
console.log(require);
 
    
    let location = useLocation();
  
    if (!require) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children;
  }

  export default RequireAuth;