import * as React from "react";
import { useChangeProfilePicture } from "../../hooks/useChangeProfilePicture";
import { useParams } from "react-router-dom";
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
  isFollowing: boolean;
  fetchFollow: () => void;
  newProfilePicture: () => void;
  loseFollow: () => void;
}

export const ProfileNav = ({
  firstName,
  lastName,
  followers,
  following,
  profilePicture,
  bio,
  isFollowing,
  loseFollow,
  fetchFollow
}: ProfileNavProps) => {
  // state

  // Params for url
  const { id } = useParams<{ id: string }>();

  // Media query
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  // profile picture
  const { selectedFile, uploadStatus, handleFileChange, handleUpload } =
    useChangeProfilePicture();

  const handleUploadClick = () => {
    if (selectedFile) {
      handleUpload(id);
    } else {
      alert("Please select a file before uploading.");
    }
  };

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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "5px"
              }}
            >
              <img
                src={profilePicture}
                alt="profile pic"
                style={{
                  borderRadius: "50%",
                  margin: "10px",
                  maxWidth: "70%"
                }}
              />
              {/* UPLOAD PROFILE PICTURE */}
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{
                    margin: "5px",
                    backgroundColor: "#1E1E1E",
                    color: "lightblue",
                    border: "2px solid black",
                    borderRadius: "5px",
                    padding: "5px",
                    width: "100%"
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "lightblue",
                    margin: "5px"
                  }}
                  onClick={handleUploadClick}
                >
                  Upload Profile Picture
                </Button>
                {uploadStatus && <p>{uploadStatus}</p>}
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
                {isFollowing ? (
                  <Button
                    sx={{
                      backgroundColor: "#1E1E1E",
                      color: "red",
                      margin: "5px"
                    }}
                    variant="contained"
                    onClick={loseFollow}
                  >
                    Unfollow User
                  </Button>
                ) : (
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
                )}
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
                    margin: "5px"
                  }}
                >
                  {bio}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      ) : (
        ////////////////////////////////////////////////////////////////////////
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
                alt="profile pic"
                style={{
                  borderRadius: "50%",
                  margin: "10px",
                  maxWidth: "70%"
                }}
              />
              {/* UPLOAD PROFILE PICTURE */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{
                    margin: "5px",
                    backgroundColor: "#1E1E1E",
                    color: "lightblue",
                    border: "2px solid black",
                    borderRadius: "5px",
                    padding: "5px",
                    width: "100%"
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "lightblue",
                    margin: "5px"
                  }}
                  onClick={handleUploadClick}
                >
                  Upload Profile Picture
                </Button>
                {uploadStatus && <p>{uploadStatus}</p>}
              </Box>
              {isFollowing ? (
                <Button
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "red",
                    margin: "5px"
                  }}
                  variant="contained"
                  onClick={loseFollow}
                >
                  Unfollow User
                </Button>
              ) : (
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
              )}
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
                  margin: "5px"
                }}
              >
                {bio}
              </Typography>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
