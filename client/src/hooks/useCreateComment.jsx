import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useCreateComment = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const createComment = async (commentText, commentStatusId, user) => {
    const response = await fetch(`/api/comment/${commentStatusId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ commentText, user })
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "CREATE_COMMENT",
        payload: data
      });
      setIsLoading(false);
    }

    if (!response.ok) {
      setError(data.message);
      setIsLoading(false);
    }
  };
  return { error, isLoading, createComment };
};
