import { ReactNode } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Header from "./Header";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Toolbar from "@material-ui/core/Toolbar";

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
  main: {
    flex: 1,
    background: "#f7f5f5",
    color: "black",
  },
}));

type Props = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <DrawerContextProvider>
      <div className={classes.root}>
        <Header />
        <Toolbar />
        <div className={classes.container}>
          <Drawer />
          <main className={classes.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </DrawerContextProvider>
  );
};

export default Layout;
