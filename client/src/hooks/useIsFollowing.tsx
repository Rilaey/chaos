import * as React from "react"
import { getUserId } from "../utils/getUserId";

export const useIsFollowing = () => {
  const [userFollowing, setUserFollowing] = React.useState<boolean>(false);

  const fetchFollowingStatus = async (targetUserId: string) => {
    try {
      // Fetch the current user's data from the server
      const response = await fetch(`/api/user/oneUser/${getUserId()}`);
      const userData = await response.json();

      // Check if the target user is in the current user's following list
      const isUserFollowing = userData.following.includes(targetUserId);
      console.log(isUserFollowing)
      setUserFollowing(isUserFollowing);
    } catch (error) {
      console.error('Error fetching following status:', error);
    }
  };

  return { userFollowing, fetchFollowingStatus }
};
