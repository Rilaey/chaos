import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
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
