import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { ProfileNav } from "../Components/ProfileNav/ProfileNav";
import ProfileStatusCard from "../Components/ProfileStatusCard/ProfileStatusCard";
import { useGetOneUser } from "../hooks/useGetOneUser";
import { useFollowUser } from "../hooks/useFollowUser";
import { Like } from "../models/Like";
import { User } from "../models/User";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  // Hooks
  const { getOneUser, getUser } = useGetOneUser();
  const { followUser, followed } = useFollowUser();
  const { user } = useAuthContext();

  // Params for url
  const { id } = useParams<{ id: string }>();

  // Media query
  const isSmallScreen = useMediaQuery('(max-width:800px)');

  const handleFollow = async () => {
    await followUser(getUser._id, user.user._id);
  };

  const fetchUser = useCallback(async () => {
    await getOneUser(id);
  }, [getOneUser, id]);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
    {isSmallScreen ?
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          width: "100%"
        }}
      >
        <ProfileNav
          firstName={getUser?.firstName}
          lastName={getUser?.lastName}
          fetchFollow={handleFollow}
          followers={getUser?.followers}
          following={getUser?.following}
          profilePicture={getUser?.profilePicture}
          bio={getUser?.bio}
        />
      </Box>
      <Box
        sx={{
          width: "100%"
        }}
      >
        {/* Using comment card to display user status */}
        {getUser?.status?.map(
          (item: {
            statusComments: any;
            _id: string;
            message: string;
            createdBy: User;
            likes: Like[];
            createdAt: string;
          }) => {
            return (
              <ProfileStatusCard
                key={item._id}
                _id={item._id}
                message={item.message}
                createdBy={item.createdBy}
                likes={item.likes}
                comments={item.statusComments}
                createdAt={item.createdAt}
              />
            );
          }
        )}
      </Box>
    </Box>
    :
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          width: "30%"
        }}
      >
        <ProfileNav
          firstName={getUser?.firstName}
          lastName={getUser?.lastName}
          fetchFollow={handleFollow}
          followers={getUser?.followers}
          following={getUser?.following}
          profilePicture={getUser?.profilePicture}
          bio={getUser?.bio}
        />
      </Box>
      <Box
        sx={{
          width: "70%"
        }}
      >
        {/* Using comment card to display user status */}
        {getUser?.status?.map(
          (item: {
            statusComments: any;
            _id: string;
            message: string;
            createdBy: User;
            likes: Like[];
            createdAt: string;
          }) => {
            return (
              <ProfileStatusCard
                key={item._id}
                _id={item._id}
                message={item.message}
                createdBy={item.createdBy}
                likes={item.likes}
                comments={item.statusComments}
                createdAt={item.createdAt}
              />
            );
          }
        )}
      </Box>
    </Box>
  }
  </>
  )
};

export default Profile;
