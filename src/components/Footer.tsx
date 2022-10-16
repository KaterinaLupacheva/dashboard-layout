import { PropsWithChildren } from 'react';
import { Box, useTheme } from '@mui/material';

export const Footer = ({ children }: PropsWithChildren<unknown>) => {
  const theme = useTheme();

  if (!children) {
    return null;
  }

  return (
    <Box
      sx={{
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
        padding: theme.spacing(2),
        textAlign: 'center',
      }}
    >
      { children }
    </Box>
  );
};
