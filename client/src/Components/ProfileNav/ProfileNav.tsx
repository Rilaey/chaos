import { Box, Container, CssBaseline, Typography } from "@mui/material";

interface ProfileNavProps {
  firstName: string;
  lastName: string;
}

export const ProfileNav = ({ firstName, lastName }:ProfileNavProps) => {
  return (
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
              src="https://via.placeholder.com/150"
              alt="alt"
              style={{
                borderRadius: "50%",
                margin: "10px"
              }}
            />
            <Typography sx={{
              margin: "5px"
            }}>{firstName} {lastName}</Typography>
            <Typography sx={{
              margin: "5px"
            }}>0 Followers</Typography>
            <Typography sx={{
              margin: "5px"
            }}>0 Following</Typography>
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
            {/* Bio */}
            <Typography>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
          </Box>
      </Box>
    </Container>
  );
};