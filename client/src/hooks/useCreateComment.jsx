import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useCreateComment = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const createComment = async (commentText, id, user) => {
    const response = await fetch(`/api/comment/createComment/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ commentText, user })
    });

    const data = await response.json();

    if (response.ok) {
      setIsLoading(false)
      console.log(data)
      return data;
    }

    if (!response.ok) {
      setError(data.message);
      setIsLoading(false);
    }
  };
  return { error, isLoading, createComment };
};
