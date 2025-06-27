import { Paper, Typography, Link, Box, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        <Stack direction="column" spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon color="primary" />
            <Typography component="span" sx={{ fontWeight: 500 }}>
              <Link href="mailto:agustinplacenti@gmail.com" underline="hover" color="inherit">
                agustinplacenti@gmail.com
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon color="primary" />
            <Typography component="span" sx={{ fontWeight: 500 }}>
              +54 9 249 4500932
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinkedInIcon color="primary" />
            <Button
              variant="contained"
              color="primary"
              size="small"
              href="https://www.linkedin.com/in/agustinplacenti/"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LinkedInIcon />}
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              LinkedIn
            </Button>
          </Box>
        </Stack>
      </HoverPaper>
    </Box>
  );
};

export default Contact;
