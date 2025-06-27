import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useThemeStore } from './components/themeStore';
import { useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, IconButton, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  const dark = useThemeStore(state => state.dark);
  const toggleDark = useThemeStore(state => state.toggleDark);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  // Scroll suave a la sección
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      primary: { main: '#1976d2' },
      background: {
        default: dark ? '#181a1b' : '#f9f9f9',
        paper: dark ? '#222' : '#fff',
      },
    },
    typography: {
      fontFamily: 'Segoe UI, Arial, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="animated-bg">
        <div className="circle circle1" />
        <div className="circle circle2" />
        <div className="circle circle3" />
      </div>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative', zIndex: 1 }}>
        <Container maxWidth="md" sx={{ pt: 2, pb: 2, position: 'relative', zIndex: 2 }}>
          <Box sx={{ position: 'fixed', top: 20, right: 40, zIndex: 1301 }}>
            <IconButton onClick={toggleDark} color="primary">
              {dark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
          <Header onNavigate={handleNavigate} />
          <main>
            <About />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
