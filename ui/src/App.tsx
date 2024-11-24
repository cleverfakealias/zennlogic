import "./App.css";
import NavigationDrawer from "./components/navigation/NavigationDrawer";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Blog from "./components/blog/Blog.tsx";
import BlogPostDetail from "./components/blog/BlogPostDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          width: "90%",
        }}
      >
        <NavigationDrawer />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/post/:slug" element={<BlogPostDetail />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
