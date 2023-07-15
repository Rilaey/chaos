import { Container, Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { User } from "../../models/User";
import { Like } from "../../models/Like";
import { Comment } from "../../models/Comment"

export interface StatusCardProps {
  _id: string;
  message: string;
  createdBy: User;
  createdAt: string;
  likes: Like[];
  statusComments: Comment[];
}

const SingleStatusCard = ({
  _id,
  message,
  createdBy,
  createdAt
}: StatusCardProps) => {

  return (
    <Container>
      <CssBaseline />
      <Box
        key={_id}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          flexWrap: "wrap",
          height: "100%",
          backgroundColor: "#2F2F31",
          border: "2px solid black",
          margin: "10px",
          padding: "10px",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              margin: "5px",
              color: "white"
            }}
          >
            {message}
          </Typography>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            textDecoration: "none"
          }}
        >
          <Typography
            sx={{
              margin: "5px",
              textDecoration: "none",
              color: "#fff"
            }}
          >
            {createdBy.firstName} {createdBy.lastName}
          </Typography>
          <Typography
            sx={{
              margin: "5px",
              textDecoration: "none",
              color: "#fff"
            }}
          >
            {createdAt}
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default SingleStatusCard;
