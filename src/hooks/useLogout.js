import { useAuthContext } from "./useAuthContext";

// no need to touch the server, just delete JWT & update context state
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove jwt from local storage
    localStorage.removeItem('token');
    //dispatch logout action
    dispatch({ type: 'LOGOUT' });
  }
  return { logout };
};

