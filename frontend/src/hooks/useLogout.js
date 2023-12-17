import { useAuthContext } from "./useAuthContext";
import { useTodoContext } from "./useTodoContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: todoDispatch } = useTodoContext();

  const logout = () => {
    // Remove User From Storage
    localStorage.removeItem("user");
    // Dispatch Action
    dispatch({ type: "LOGOUT" });
    todoDispatch({ type: "SET_TODO", payload: null });
  };
  return { logout };
};
