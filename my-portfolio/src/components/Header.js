import { Toolbar, Typography, Button, Box } from '@mui/material';

const Header = ({ onNavigate }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'center', py: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
          Agustín Placenti
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Desarrollador React
        </Typography>
        <Box>
          <Button color="primary" onClick={() => onNavigate('about')}>Sobre mí</Button>
          <Button color="primary" onClick={() => onNavigate('experience')}>Experiencia</Button>
          <Button color="primary" onClick={() => onNavigate('contact')}>Contacto</Button>
          <Button color="primary" onClick={() => onNavigate('footer')}>Habilidades</Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;
