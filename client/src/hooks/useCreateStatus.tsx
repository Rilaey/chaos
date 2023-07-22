import * as React from "react";
import { useAuthContext } from "./useAuthContext";
import { getToken } from "../utils/getToken";

export const useStatus = () => {
  const [error, setError] = React.useState<null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const createStatus = async (message: string, createdBy: string) => {
    setError(null);
    setIsLoading(false);

    const response = await fetch("/api/status/createStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify({ message, createdBy })
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data);
      setIsLoading(false);
      return;
    }

    if (response.ok) {
      dispatch({ type: "CREATE_STATUS", payload: data });
      setIsLoading(false);
    }
  };

  return { createStatus, error, isLoading };
};
