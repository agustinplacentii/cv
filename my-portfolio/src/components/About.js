import { Paper, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Paper id="about" elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Resumen</Typography>
      <Typography>
        Soy un desarrollador front-end con más de 7 años de experiencia en JavaScript y TypeScript. Mi
        principal framework es React (Node & Next JS), y siempre estoy al día con sus
        últimas actualizaciones. Fomento las buenas prácticas y la buena performance de
        las aplicaciones. Estoy familiarizado con tecnologías del back-end como .NET y bases de datos. Además, tengo un nivel avanzado de inglés.
      </Typography>
    </Paper>
  );
};

export default About;
