import { Paper, Typography, Box } from '@mui/material';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaBootstrap, FaNpm } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiJavascript, SiNextdotjs, SiJest, SiCypress, SiVite, SiTailwindcss, SiFigma } from 'react-icons/si';

const skills = [
  { icon: <FaReact color="#61dafb" size={24} />, label: 'React' },
  { icon: <SiNextdotjs color="#000" size={24} />, label: 'Next.js' },
  { icon: <FaNodeJs color="#3c873a" size={24} />, label: 'Node.js' },
  { icon: <SiTypescript color="#3178c6" size={24} />, label: 'TypeScript' },
  { icon: <SiJavascript color="#f7df1e" size={24} />, label: 'JavaScript' },
  { icon: <SiRedux color="#764abc" size={24} />, label: 'Redux' },
  { icon: <FaHtml5 color="#e34c26" size={24} />, label: 'HTML5' },
  { icon: <FaCss3Alt color="#1572b6" size={24} />, label: 'CSS3' },
  { icon: <FaSass color="#cc6699" size={24} />, label: 'Sass' },
  { icon: <FaBootstrap color="#563d7c" size={24} />, label: 'Bootstrap' },
  { icon: <SiTailwindcss color="#38bdf8" size={24} />, label: 'Tailwind CSS' },
  { icon: <FaGitAlt color="#f34f29" size={24} />, label: 'Git' },
  { icon: <FaNpm color="#cb3837" size={24} />, label: 'npm' },
  { icon: <SiJest color="#c21325" size={24} />, label: 'Jest' },
  { icon: <SiCypress color="#17202c" size={24} />, label: 'Cypress' },
  { icon: <SiVite color="#646cff" size={24} />, label: 'Vite' },
  { icon: <SiFigma color="#a259ff" size={24} />, label: 'Figma' },
];

const Footer = () => {
  return (
    <Paper className="footer" id="footer" elevation={3} sx={{ mt: 4, p: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Skills y Habilidades Frontend</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        {skills.map(({ icon, label }) => (
          <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'background.default', borderRadius: 2, px: 2, py: 1, boxShadow: 1 }}>
            {icon}
            <Typography variant="body2">{label}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Footer;
