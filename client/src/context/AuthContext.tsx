import { createContext, useReducer, useEffect, Dispatch } from "react";

type AuthState = { user: unknown }; // Replace 'any' with the actual type of 'user'
type AuthAction = { type: string; payload: unknown }; // Replace 'any' with the actual payload type

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
} | null>(null);

export const authReducer = (state: unknown, action: { type: unknown; payload: unknown; }) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "STATUS":
      return { user: action.payload };
    case "LIKE_STATUS" :
      return { user: action.payload };
    case "CREATE_COMMENT":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });

  console.log(state)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    // check to see if user exist in local storage for initial startup state
    if (user) {
      dispatch({
        type: "LOGIN",
        payload: user
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
