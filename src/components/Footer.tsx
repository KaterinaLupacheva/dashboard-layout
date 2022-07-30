import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
        padding: theme.spacing(2),
      }}
    >
      <Typography variant="h6">Footer</Typography>
    </Box>
  );
};

export default Footer;
