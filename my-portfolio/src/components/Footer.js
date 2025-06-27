import { Paper, Typography, Box } from '@mui/material';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiRedux } from 'react-icons/si';

const Footer = () => {
  return (
    <Paper className="footer" id="footer" elevation={3} sx={{ mt: 4, p: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Habilidades principales</Typography>
      <Box className="skills-list" sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', fontSize: '1.2rem' }}>
        <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><FaReact color="#61dafb" size={28} /> React</Box>
        <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><FaNodeJs color="#3c873a" size={28} /> Node.js</Box>
        <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><SiTypescript color="#3178c6" size={28} /> TypeScript</Box>
        <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><SiRedux color="#764abc" size={28} /> Redux</Box>
      </Box>
    </Paper>
  );
};

export default Footer;
