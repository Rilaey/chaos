import { getUserId } from "../utils/getUserId";

export const useLikeStatus = () => {
  const likeStatus = async (id) => {
    const response = await fetch(`/api/status/likeStatus/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: getUserId()
      })
    });

    const data = response.json();

    if (!response.ok) {
      console.log("error in useLikeStatus");
    }

    if (response.ok) {
      location.reload()
      return data;
    }
  };

  return { likeStatus };
};
