import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useStatus = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const createStatus = async (message, createdBy) => {
    setError(null);
    setIsLoading(false);

    const response = await fetch("/api/status/createStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message, createdBy})
    });

    const data = await response.json();

    console.log(data)

    if (!response.ok) {
      setError(data.error);
      setIsLoading(false);
      return;
    }

    if (response.ok) {
      dispatch({ type: "CREATE_STATUS", payload: data });
      setIsLoading(false);
    }
  };

  return { createStatus, error, isLoading }
};