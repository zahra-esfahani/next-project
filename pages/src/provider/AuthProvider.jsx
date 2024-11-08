import { Navigate } from "react-router-dom";
import { getCookie } from "../configs/cookie";

function AuthProvider({ children }) {
  const token = getCookie();
  if (!token) return <Navigate to="/Login" />;
    
  return children;
}

export default AuthProvider;