import { Paper, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
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

const Experience = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <HoverPaper id="experience" sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Experiencia Laboral</Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Banco Galicia (Marzo 2023 - Actualidad)</Typography>
          <List dense>
            <ListItem><ListItemText primary="Desarrollo de SPA's y BFF's" /></ListItem>
            <ListItem><ListItemText primary="Manejo de Openshift y Jenkins para deployments" /></ListItem>
            <ListItem><ListItemText primary="Manejo de perfiles en Azure AD" /></ListItem>
            <ListItem><ListItemText primary="Discovery del negocio para dar mejores soluciones" /></ListItem>
            <ListItem><ListItemText primary="Integración de autenticación SSO con Azure AD" /></ListItem>
            <ListItem><ListItemText primary="Automatización de pipelines CI/CD para despliegues eficientes" /></ListItem>
            <ListItem><ListItemText primary="Optimización de performance y reducción de tiempos de carga en aplicaciones React" /></ListItem>
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
            <ListItem><ListItemText primary="Migración de aplicaciones legacy a React con mínima interrupción" /></ListItem>
            <ListItem><ListItemText primary="Implementación de dark mode global y animaciones avanzadas" /></ListItem>
            <ListItem><ListItemText primary="Desarrollo de PWA con funcionalidades offline y push notifications" /></ListItem>
          </List>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Globant (Marzo 2017 - Marzo 2020)</Typography>
          <List dense>
            <ListItem><ListItemText primary="Responsabilidad en equipos multidisciplinarios" /></ListItem>
            <ListItem><ListItemText primary="SCRUM como metodología" /></ListItem>
            <ListItem><ListItemText primary="Alta cobertura de tests (+80%)" /></ListItem>
            <ListItem><ListItemText primary="Herramientas: Google Analytics, New Relic, Jenkins, Git" /></ListItem>
            <ListItem><ListItemText primary="Integración de sistemas de monitoreo y métricas en aplicaciones productivas" /></ListItem>
            <ListItem><ListItemText primary="Optimización de procesos de desarrollo y despliegue" /></ListItem>
          </List>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Bision IT Solutions (Marzo 2016 - Marzo 2017)</Typography>
          <List dense>
            <ListItem><ListItemText primary="Corrección de bugs" /></ListItem>
            <ListItem><ListItemText primary="Desarrollo de nuevas funcionalidades" /></ListItem>
            <ListItem><ListItemText primary="Refactorización de módulos críticos para mejorar mantenibilidad" /></ListItem>
          </List>
        </Box>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>Educación</Typography>
        <Typography>Analista en Sistemas - UNICEN (2011 - 2016)</Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>Habilidades</Typography>
        <Typography><b>Front-end:</b> React, HTML5, Node JS, Next JS, Zustand, Redux, Formik, Sass, MUI, Cypress, Webpack, etc.</Typography>
        <Typography><b>Soft Skills:</b> Flexibilidad, proactividad, buena comunicación</Typography>
        <Typography><b>Metodologías:</b> SCRUM, AGILE</Typography>
        <Typography><b>Idiomas:</b> Español (nativo), Inglés (avanzado)</Typography>
      </HoverPaper>
    </Box>
  );
};

export default Experience;
