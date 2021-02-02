import { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Toolbar from "@material-ui/core/Toolbar";

import { DrawerContextProvider } from "../contexts/drawer-context";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  main: {
    flex: 1,
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
