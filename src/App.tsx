import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./Theme";
import { Navbar } from "./components";
import About from "./screens/about/About";
import Blog from "./screens/blog/Blog";
import Shop from "./screens/shop/Shop";
import OnlineCoaching from "./screens/shop/online-coaching/OnlineCoaching";
import AppMembership from "./screens/shop/app-membership/AppMembership";
import Sessions from "./screens/shop/sessions/Sessions";
import StrengthCamp from "./screens/shop/strength-camp/StrengthCamp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/online_coaching' element={<OnlineCoaching />} />
          <Route path="/shop/app_membership" element={<AppMembership />}/>
          <Route path="/shop/sessions" element={<Sessions />}/>
          <Route path="/shop/strength_camp" element={<StrengthCamp />}/>
          <Route path="/" element={<Navigate to="/about" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
