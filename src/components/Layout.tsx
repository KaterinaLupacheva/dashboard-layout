import { useState, ReactNode } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import Header from "./Header";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItemsList from "./MenuItemsList";
import Typography from "@material-ui/core/Typography";
import { DrawerContextProvider } from "../contexts/drawer-context";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#000133",
  },

  container: {
    display: "flex",
    flex: 1,
  },
  drawer: {
    background: "#D8DCD6",
    position: "static",
    transition: "width .7s",
  },
  closed: {
    width: "0px",
  },
  opened: {
    width: "240px",
  },
  main: {
    flex: 1,
    background: "#f7f5f5",
    color: "black",
  },
  footer: {
    background: "#00022E",
    height: "50px",
    color: "#FC86AA",
  },
}));

type Props = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const classes = useStyles();
  return (
    <DrawerContextProvider>
      <div className={classes.root}>
        <Header />
        <Toolbar />
        <div className={classes.container}>
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
          <main className={classes.main}>{children}</main>
        </div>
        <div className={classes.footer}>
          <Typography variant="h6">Footer</Typography>
        </div>
      </div>
    </DrawerContextProvider>
  );
};

export default Layout;
