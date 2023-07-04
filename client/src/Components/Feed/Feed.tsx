import { Container, Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { User } from "../../models/User";

interface FeedCardProps {
  _id: string;
  message: string;
  createdBy: User;
  createdAt: string;
}

const Feed = ({ _id, message, createdBy, createdAt }: FeedCardProps) => {
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
          borderRadius: "20px"
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
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}>
          <Typography
            sx={{
              margin: "5px"
            }}
          >
            {createdBy.firstName} {createdBy.lastName}
          </Typography>
          <Typography
            sx={{
              margin: "5px"
            }}
          >
            {createdAt}
          </Typography>
          </div>
      </Box>
    </Container>
  );
};

export default Feed;
