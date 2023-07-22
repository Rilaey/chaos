import { getUserId } from "../utils/getUserId";
import { getToken } from "../utils/getToken"

export const useLikeStatus = () => {
  const likeStatus = async (id: string) => {
    const response = await fetch(`/api/status/likeStatus/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        userId: getUserId()
      })
    });

    const data = response.json();

    if (!response.ok) {
      window.alert("User already liked status!")
      console.log("error in useLikeStatus");
    }

    if (response.ok) {
      location.reload()
      return data;
    }
  };

  return { likeStatus };
};
