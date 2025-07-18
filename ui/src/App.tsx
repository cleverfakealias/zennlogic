import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import Blog from "./components/blog/Blog";
import BlogPostDetail from "./components/blog/BlogPostDetail";
import CareerTimeline from "./components/pages/CareerTimeline";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import DevelopmentExperience from "./components/pages/DevelopmentExperience";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { createMnTheme } from "./theme";
function App() {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [themeMode, setThemeMode] = useState(getSystemTheme());

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      setThemeMode(e.matches ? "dark" : "light");
    };
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const theme = createMnTheme(themeMode as "light" | "dark");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header themeMode={themeMode} setThemeMode={setThemeMode} />
      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        marginTop: '4.5rem', // Space for fixed header
        marginBottom: '4rem', // Space for fixed footer
        minHeight: 'calc(100vh - 8.5rem)' // Full height minus header and footer
      }}>
        <Container sx={{ 
          width: "90%", 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start',
          paddingTop: { xs: 2, md: 3 }, // Small responsive top padding
          paddingBottom: { xs: 2, md: 3 }, // Small responsive bottom padding
          marginBottom: 0,
          gap: { xs: 2, md: 3 }, // Consistent spacing between child components
        }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/post/:slug" element={<BlogPostDetail />} />
              <Route path="career" element={<CareerTimeline />} />
              <Route path="experience" element={<DevelopmentExperience />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Router>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
