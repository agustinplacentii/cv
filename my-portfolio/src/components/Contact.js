import { Paper, Typography, Link } from '@mui/material';

const Contact = () => {
  return (
    <Paper id="contact" elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Contacto</Typography>
      <Typography>Email: <Link href="mailto:agustinplacenti@gmail.com">agustinplacenti@gmail.com</Link></Typography>
      <Typography>Teléfono: +54 9 249 4500932</Typography>
      <Typography>LinkedIn: <Link href="https://www.linkedin.com/in/agustinplacenti/" target="_blank" rel="noopener noreferrer">linkedin.com/in/agustinplacenti</Link></Typography>
    </Paper>
  );
};

export default Contact;
