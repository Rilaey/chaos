import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
  useMediaQuery
} from "@mui/material";

interface ProfileNavProps {
  firstName: string;
  lastName: string;
  followers: [];
  following: [];
  profilePicture: string;
  bio: string;
  fetchFollow: () => void;
}

export const ProfileNav = ({
  firstName,
  lastName,
  followers,
  following,
  profilePicture,
  bio,
  fetchFollow
}: ProfileNavProps) => {
  // Media query
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  return (
    <>
      {isSmallScreen ? (
        <Container>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#2F2F31",
              boxShadow: "20px 10px 10px 10px rgba(0,0,0,0.75)",
              border: "5px solid black",
              marginTop: "20px"
            }}
          >
            <Box>
              <img
                src={profilePicture}
                alt="alt"
                style={{
                  borderRadius: "50%",
                  margin: "20px",
                  height: "20vh"
                  // maxWidth: "70%"
                }}
              />
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "lightBlue",
                    margin: "5px"
                  }}
                  variant="contained"
                  onClick={fetchFollow}
                >
                  Follow User
                </Button>
                <Typography
                  sx={{
                    margin: "5px"
                  }}
                >
                  {firstName} {lastName}
                </Typography>
                <Typography
                  sx={{
                    margin: "5px"
                  }}
                >
                  {followers?.length} Followers
                </Typography>
                <Typography
                  sx={{
                    margin: "5px"
                  }}
                >
                  {following?.length} Following
                </Typography>
                <Typography
                  sx={{
                    // margin: "3px",
                  }}
                >
                  {bio}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#2F2F31",
              boxShadow: "20px 10px 10px 10px rgba(0,0,0,0.75)",
              border: "5px solid black",
              borderRadius: "20px",
              width: "100%",
              margin: "10px",
              padding: "10px",
              flexWrap: "wrap"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                margin: "10px"
              }}
            >
              <img
                src={profilePicture}
                alt="alt"
                style={{
                  borderRadius: "50%",
                  margin: "10px",
                  maxWidth: "70%"
                }}
              />
              <Button
                sx={{
                  backgroundColor: "#1E1E1E",
                  color: "lightBlue",
                  margin: "5px"
                }}
                variant="contained"
                onClick={fetchFollow}
              >
                Follow User
              </Button>
              <Typography
                sx={{
                  margin: "5px"
                }}
              >
                {firstName} {lastName}
              </Typography>
              <Typography
                sx={{
                  margin: "5px"
                }}
              >
                {followers?.length} Followers
              </Typography>
              <Typography
                sx={{
                  margin: "5px"
                }}
              >
                {following?.length} Following
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
              }}
            >
              <Typography>{bio}</Typography>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
