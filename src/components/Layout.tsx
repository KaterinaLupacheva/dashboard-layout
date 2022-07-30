import { ReactNode } from "react";
import Header from "./Header";
import Drawer from "./Drawer";

import { DrawerContextProvider } from "../contexts/drawer-context";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

type Props = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <DrawerContextProvider>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            flex: 1,
          }}
        >
          <Drawer />
          <main style={{ flex: 1 }}>{children}</main>
        </Box>
      </Box>
    </DrawerContextProvider>
  );
};

export default Layout;
