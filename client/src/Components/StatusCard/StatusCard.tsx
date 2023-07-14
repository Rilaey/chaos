import { Container, Box, Typography, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { User } from "../../models/User";
import { Like } from "../../models/Like";

interface StatusCardProps {
  _id: string;
  message: string;
  createdBy: User;
  likes: Like[];
  createdAt: string;
}

const StatusCard = ({
  _id,
  message,
  createdBy,
  likes,
  createdAt
}: StatusCardProps) => {
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
          }}>{message}</Typography>
          <Typography sx={{
            marginBottom: "5px",
            color: "lightgray"
          }}>
            {createdBy.firstName} {createdBy.lastName}
          </Typography >
          <Typography sx={{
            marginBottom: "5px",
            color: "lightgray"
          }}>{createdAt}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column"
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Box>
            <Button
              sx={{
                backgroundColor: "#1E1E1E",
                color: "red",
                margin: "5px",
                width: "100%"
              }}
              variant="contained"
              href={`/status/${_id}`}
            >
              {likes.length == 1 ? (
                <Typography>{likes.length} Like</Typography>
              ) : (
                <Typography>{likes.length} Likes</Typography>
              )}
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "#1E1E1E",
                color: "red",
                margin: "5px",
                width: "100%"
              }}
              variant="contained"
              href={`/status/${_id}`}
            >
              VIEW COMMENTS
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default StatusCard;
