import { Box, Button, Typography } from "@mui/material";
import { Like } from "../../models/Like";

interface AddLikeProps {
  likes: Like[];
  likeStatus: () => void;
}

const AddLike = ({ likes, likeStatus }: AddLikeProps) => {
  return (
    <Box
      sx={{
        width: "100%"
      }}
    >
      <Button
        variant="contained"
        onClick={likeStatus}
        sx={{
          backgroundColor: "#1E1E1E",
          color: "red",
          width: "100%",
          border: "2px solid black",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          padding: "10px",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        {likes.length == 1 ?
        <Typography sx={{
          fontSize: "16px"
        }}>{likes.length} Like</Typography>
        :
        <Typography sx={{
          fontSize: "16px"
        }}>{likes.length} Likes</Typography>
      }
      </Button>
    </Box>
  );
};

export default AddLike;
