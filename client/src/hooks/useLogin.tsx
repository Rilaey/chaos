import * as React from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = React.useState<null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data);
      setIsLoading(false);
      return;
    }

    if (response.ok) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(data));
      // update auth context
      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);

      // redirect to home page
      navigate("/");
    }
  };

  return { login, isLoading, error };
};
