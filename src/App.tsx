import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./Theme";
import { Navbar } from "components";

import {
  About,
  Blog,
  Shop,
  OnlineCoaching,
  AppMembership,
  Sessions,
  StrengthCamp,
  Home
} from "screens";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/online_coaching' element={<OnlineCoaching />} />
          <Route path="/shop/app_membership" element={<AppMembership />} />
          <Route path="/shop/sessions" element={<Sessions />} />
          <Route path="/shop/strength_camp" element={<StrengthCamp />} />
          <Route path="/" element={<Navigate to="/about" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
