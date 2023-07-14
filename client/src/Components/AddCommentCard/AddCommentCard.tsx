import { useState } from "react";
import { useParams } from "react-router-dom"
import { Container, Box, Button, CssBaseline, TextField } from "@mui/material"
import { User } from "../../models/User";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCreateComment } from "../../hooks/useCreateComment";
import { getUserId } from "../../utils/getUserId"

interface AddCommentState {
  commentText: string;
  commentStatusId: string | unknown;
  user: string;
}

export const AddCommentCard = () => {
  const { user } = useAuthContext()
  const { id } = useParams<{ id: string }>();

  const { createComment, error, isLoading } = useCreateComment()

  const [commentState, setCommentState] = useState<AddCommentState>({
    commentText: "",
    commentStatusId: id,
    user: getUserId()
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCommentState({ ...commentState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createComment(id);

    setCommentState({
      commentText: "",
      commentStatusId: id,
      user: getUserId()
    });
  }

  return (
    <Container>
    <CssBaseline />
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
        padding: "5px",
        borderRadius: "20px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{ margin: "10px", width: "100%", padding: "10px" }}
        type="text"
        size="medium"
        placeholder="Create Comment..."
        name="commentText"
        value={commentState.commentText}
        onChange={handleInputChange}
      />
      {error && <Box>{error}</Box>}
      <Button
        sx={{ margin: "10px", backgroundColor: "#1E1E1E", color: "red", padding: "10px", width: "10%", borderRadius: "20px" }}
        variant="contained"
        type="submit"
        disabled={isLoading}
        onClick={createComment}
      >
        Post
      </Button>
    </Box>
  </Container>
  )
}