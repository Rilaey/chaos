import { Container, CssBaseline, Box, Typography } from "@mui/material"
import { Comment } from "../../models/Comment"
import { User } from "../../models/User"

interface CommentCardProps {
    commentText: string;
    commentCreator: User;
    createdAt: string;
}

const CommentCard = ({ commentText, commentCreator, createdAt}:CommentCardProps) => {
  return (
    <Container>
    <CssBaseline />
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#2F2F31",
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        // border: "2px solid yellow"
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <Typography variant="h4" sx={{
          marginBottom: "5px"
        }}>{commentText}</Typography>
        <Typography sx={{
          marginBottom: "5px",
          color: "lightgray"
        }}>
          {commentCreator.firstName} {commentCreator.lastName}
        </Typography >
        <Typography>
          {createdAt}
        </Typography>
      </Box>
    </Box>
  </Container>
  )
}

export default CommentCard