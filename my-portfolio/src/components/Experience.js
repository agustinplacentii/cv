import { Paper, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Experience = () => {
  return (
    <Paper id="experience" elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Experiencia Laboral</Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Banco Galicia (Marzo 2023 - Actualidad)</Typography>
        <List dense>
          <ListItem><ListItemText primary="Desarrollo de SPA's y BFF's" /></ListItem>
          <ListItem><ListItemText primary="Manejo de Openshift y Jenkins para deployments" /></ListItem>
          <ListItem><ListItemText primary="Manejo de perfiles en Azure AD" /></ListItem>
          <ListItem><ListItemText primary="Discovery del negocio para dar mejores soluciones" /></ListItem>
        </List>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">GlobalLogic (Marzo 2020 - Marzo 2023)</Typography>
        <List dense>
          <ListItem><ListItemText primary="Configuración del proyecto y arquetipos en React" /></ListItem>
          <ListItem><ListItemText primary="Desarrollo de PWA’s" /></ListItem>
          <ListItem><ListItemText primary="Trabajo fullstack con Express" /></ListItem>
          <ListItem><ListItemText primary="Tests de integración con Cypress" /></ListItem>
          <ListItem><ListItemText primary="Metodología AGILE" /></ListItem>
        </List>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Globant (Marzo 2017 - Marzo 2020)</Typography>
        <List dense>
          <ListItem><ListItemText primary="Responsabilidad en equipos multidisciplinarios" /></ListItem>
          <ListItem><ListItemText primary="SCRUM como metodología" /></ListItem>
          <ListItem><ListItemText primary="Alta cobertura de tests (+80%)" /></ListItem>
          <ListItem><ListItemText primary="Herramientas: Google Analytics, New Relic, Jenkins, Git" /></ListItem>
        </List>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Bision IT Solutions (Marzo 2016 - Marzo 2017)</Typography>
        <List dense>
          <ListItem><ListItemText primary="Corrección de bugs" /></ListItem>
          <ListItem><ListItemText primary="Desarrollo de nuevas funcionalidades" /></ListItem>
        </List>
      </Box>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>Educación</Typography>
      <Typography>Analista en Sistemas - UNICEN (2011 - 2016)</Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>Habilidades</Typography>
      <Typography><b>Front-end:</b> React, HTML5, Node JS, Next JS, Zustand, Redux, Formik, Sass, MUI, Cypress, Webpack, etc.</Typography>
      <Typography><b>Soft Skills:</b> Flexibilidad, proactividad, buena comunicación</Typography>
      <Typography><b>Metodologías:</b> SCRUM, AGILE</Typography>
      <Typography><b>Idiomas:</b> Español (nativo), Inglés (avanzado)</Typography>
    </Paper>
  );
};

export default Experience;
