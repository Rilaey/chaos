import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Status from "./Pages/Status";
import Profile from "./Pages/Profile";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getToken } from "./utils/getToken";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HeaderNav />
        <Routes>
          <Route
            path="/"
            element={getToken() ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/status/:id"
            element={getToken() ? <Status /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile/:id"
            element={getToken() ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
