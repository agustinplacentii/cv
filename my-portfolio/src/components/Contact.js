import { Paper, Typography, Link, Box } from '@mui/material';
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

const Contact = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <HoverPaper id="contact" sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Contacto</Typography>
        <Typography>Email: <Link href="mailto:agustinplacenti@gmail.com">agustinplacenti@gmail.com</Link></Typography>
        <Typography>Teléfono: +54 9 249 4500932</Typography>
        <Typography>LinkedIn: <Link href="https://www.linkedin.com/in/agustinplacenti/" target="_blank" rel="noopener noreferrer">linkedin.com/in/agustinplacenti</Link></Typography>
      </HoverPaper>
    </Box>
  );
};

export default Contact;
