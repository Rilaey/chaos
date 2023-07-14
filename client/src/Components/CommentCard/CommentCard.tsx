import { Container, CssBaseline, Box, Typography } from "@mui/material"
import { Comment } from "../../models/Comment"
import { User } from "../../models/User"

interface CommentCardProps {
    comment: string;
    user: string;
}

const CommentCard = ({ comment, user}:CommentCardProps) => {
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
        }}>{comment}</Typography>
        <Typography sx={{
          marginBottom: "5px",
          color: "lightgray"
        }}>
          {user}
        </Typography >
      </Box>
    </Box>
  </Container>
  )
}

export default CommentCard