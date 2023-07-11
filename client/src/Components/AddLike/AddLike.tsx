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
          width: "100%"
        }}
      >
        {likes.length == 1 ?
        <Typography>{likes.length} Like</Typography>
        :
        <Typography>{likes.length} Likes</Typography>
      }
      </Button>
    </Box>
  );
};

export default AddLike;
