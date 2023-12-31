import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLogin } from "../../hooks/useLogin";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://google.com/">
        Chaos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// outline user form data
interface userFormData {
  email: string;
  password: string;
}

export default function Login() {
  const { login, error, isLoading } = useLogin();

  const [userFormData, setUserFormData] = useState<userFormData>({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(userFormData.email, userFormData.password);

    setUserFormData({
      email: "",
      password: ""
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            value={userFormData.email}
            onChange={handleInputChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={userFormData.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
          {error && (
            <Typography
              sx={{
                color: "red",
                padding: "10px",
                border: "1px solid red",
                borderRadius: "4px",
                margin: "20px 0",
                background: "#ffefef"
              }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2, backgroundColor: "#1E1E1E", color: "red" }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Link href="/signUp" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
