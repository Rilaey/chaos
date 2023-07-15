import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function HeaderNav() {
  const { logout } = useLogout();

  const { user } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Chaos
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome Back, {user.user.firstName.trim()}!
              </Typography>
              <>
                <Button color="inherit" onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => navigate(`/profile/${user.user._id}`)}>
                  Profile
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Chaos
              </Typography>
              <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
