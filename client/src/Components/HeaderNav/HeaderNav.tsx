import { useNavigate, Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  useMediaQuery,
  Button,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Menu,
  MenuItem
} from "@mui/material";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function HeaderNav() {
  // State
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Hooks
  const { logout } = useLogout();

  // User context
  const { user } = useAuthContext();

  // Navigate
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    logout();
  };

  // Media query
  const isSmallScreen = useMediaQuery("(max-width:560px)");

  // Menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isSmallScreen ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {user ? (
                <>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Chaos
                  </Typography>
                  <>
                    <Button
                    onClick={handleMenuOpen}
                    >
                      <AiOutlineMenu />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                      }}
                    >
                      <MenuItem onClick={handleMenuClose}>
                        <Link
                          to="/"
                          style={{
                            textDecoration: "none",
                            color: "red"
                          }}
                        >
                          Home
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        <Link
                          to={`/profile/${user.user._id}`}
                          style={{
                            textDecoration: "none",
                            color: "red"
                          }}
                        >
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <Link
                          to={"/login"}
                          style={{
                            textDecoration: "none",
                            color: "red"
                          }}
                        >
                          Logout
                        </Link>
                      </MenuItem>
                    </Menu>
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
      ) : (
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
                    <Button
                      color="inherit"
                      onClick={() => navigate(`/profile/${user.user._id}`)}
                    >
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
      )}
    </>
  );
}
