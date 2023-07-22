import * as React from "react";
import { useAuthContext } from "./useAuthContext";

export const useCreateComment = () => {
  const [error, setError] = React.useState<null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const { dispatch } = useAuthContext();

  const createComment = async (commentText: string, id: string, commentCreator: string) => {
    const response = await fetch(`/api/status/commentStatus/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ commentText, commentCreator })
    });

    const data = await response.json();
    console.log(data)

    if(response.ok) {
      dispatch({ type: "CREATE_COMMENT", payload: data });
      setIsLoading(false);
      location.reload();
    }

    if (!response.ok) {
      setError(data);
      setIsLoading(false);
    }
  };
  return { error, isLoading, createComment };
};
