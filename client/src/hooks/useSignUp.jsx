import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext()

  const navigate = useNavigate();

  const signUp = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, email, password})
    });

    const data = await response.json();

    if (!response.ok) {
        setError(data.message);
        setIsLoading(false);
        return;
    }

    if (response.ok) {
        // save user to local storage
        localStorage.setItem("user", JSON.stringify(data))
        // update auth context
        dispatch({ type: "LOGIN", payload: data})

        setIsLoading(false)

        // redirect to home page
        navigate("/")
    }
  };

  return { signUp, isLoading, error}
};
