import { AuthContext } from "context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  return { user, setUser };
};

export default useAuth;
