import { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    background: theme.palette.primary.dark,
    color: theme.palette.secondary.light,
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="h6">Footer</Typography>
    </div>
  );
};

export default Footer;
