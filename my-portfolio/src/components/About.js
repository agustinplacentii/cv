import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HoverPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  transition: 'background 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#f5f5f5',
    boxShadow: theme.shadows[3],
  },
}));

const About = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <HoverPaper id="about" sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Resumen</Typography>
        <Typography>
          Soy un desarrollador front-end con más de 7 años de experiencia en JavaScript y TypeScript. Mi
          principal framework es React (Node & Next JS), y siempre estoy al día con sus
          últimas actualizaciones. Fomento las buenas prácticas y la buena performance de
          las aplicaciones. Estoy familiarizado con tecnologías del back-end como .NET y bases de datos. Además, tengo un nivel avanzado de inglés.
        </Typography>
      </HoverPaper>
    </Box>
  );
};

export default About;
