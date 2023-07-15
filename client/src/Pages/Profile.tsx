import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ProfileNav } from "../Components/ProfileNav/ProfileNav";
import ProfileStatusCard from "../Components/ProfileStatusCard/ProfileStatusCard";
import { useGetOneUser } from "../hooks/useGetOneUser";
import { Like } from "../models/Like";
import { User } from "../models/User";
import { Comment } from "../models/Comment"

const Profile = () => {
  const { getOneUser, getUser } = useGetOneUser();
  console.log(getUser)

  const { id } = useParams<{ id: string }>();

  const fetchUser = useCallback(async () => {
    await getOneUser(id);
  }, [getOneUser, id]);

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }}>
      <Box sx={{
        width: "30%"
      }}>
        <ProfileNav firstName={getUser?.firstName} lastName={getUser?.lastName}  />
      </Box>
      <Box sx={{
        width: "70%"
      }}>
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
  );
};

export default Profile;
