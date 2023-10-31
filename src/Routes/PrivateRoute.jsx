import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user?.email){
        return children;
    }

    if(loading){
        return (
            <div className="flex items-center justify-center my-10">
                <progress className="progress progress-success w-56"></progress>
            </div>
        );
    }

    return <Navigate state={location.pathname} to="/login" replace> </Navigate>;
};

export default PrivateRoute;