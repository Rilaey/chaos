// import { useState } from "react";
import { getToken } from "../utils/getToken";

export const useFollowUser = () => {
  //   const [followed, setFollowed] = useState(false);

  const followUser = async (id, userId) => {
    const response = await fetch(`/api/user/followUser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify({ userId })
    });

    const data = await response.json();

    if (response.ok) {
      //   setFollowed(true);
      console.log("followed!", data);
      location.reload();
      return data;
    }

    if (!response.ok) {
      //   setFollowed(false);
      console.log("error in useFollowUser Hook");
    }
  };

  return { followUser };
};
