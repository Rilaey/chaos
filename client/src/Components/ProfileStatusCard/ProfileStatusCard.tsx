import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Button,
  useMediaQuery
} from "@mui/material";
import { StatusCardProps } from "../StatusCard/StatusCard";

const ProfileStatusCard = ({
  _id,
  message,
  createdBy,
  likes,
  createdAt
}: StatusCardProps) => {
  // Media query
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      {isSmallScreen ? (
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
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"
              // border: "2px solid yellow"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <Typography
                sx={{
                  marginBottom: "5px",
                  fontWeight: "bold",
                  fontSize: "24px"
                }}
              >
                {message}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "5px",
                  color: "lightgray"
                }}
              >
                {createdBy.firstName} {createdBy.lastName}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "5px",
                  color: "lightgray"
                }}
              >
                {createdAt}
              </Typography>
                <Button
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "red",
                    margin: "5px",
                    // width: "100%"
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
                <Button
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "red",
                    margin: "5px",
                    // width: "100%"
                  }}
                  variant="contained"
                  href={`/status/${_id}`}
                >
                  VIEW COMMENTS
                </Button>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <CssBaseline />
          <Box
            key={_id}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#2F2F31",
              border: "5px solid black",
              borderRadius: "10px",
              padding: "10px",
              marginTop: "15px",
              boxShadow: "20px 10px 10px 10px rgba(0,0,0,0.75)",
              width: "100%"
              // border: "2px solid yellow"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "5px"
                }}
              >
                {message}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "5px",
                  color: "lightgray"
                }}
              >
                {createdBy.firstName} {createdBy.lastName}
              </Typography>
              <Typography>{createdAt}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#1E1E1E",
                  color: "red",
                  margin: "5px"
                  //   width: "100%"
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
              <Button
                sx={{
                  backgroundColor: "#1E1E1E",
                  color: "red",
                  margin: "5px"
                  // width: "100%"
                }}
                variant="contained"
                href={`/status/${_id}`}
              >
                VIEW COMMENTS
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProfileStatusCard;
