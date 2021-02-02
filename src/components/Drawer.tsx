import Drawer from "@material-ui/core/Drawer";
import MenuItemsList from "./MenuItemsList";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useDrawerContext } from "../contexts/drawer-context";

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    background: "#D8DCD6",
    position: "static",
  },
  closed: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7) + 1,
    overflowX: "hidden",
  },
  opened: {
    width: "240px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const CustomDrawer = () => {
  const classes = useStyles();
  const { isOpened } = useDrawerContext();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawer, {
          [classes.closed]: !isOpened,
          [classes.opened]: isOpened,
        }),
      }}
    >
      <MenuItemsList />
    </Drawer>
  );
};

export default CustomDrawer;
