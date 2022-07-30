import MenuItemsList from "./MenuItemsList";
import { useDrawerContext } from "../contexts/drawer-context";
import Drawer from "@mui/material/Drawer";
import { useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isOpened",
})<{ isOpened: boolean }>(({ isOpened, theme }) => ({
  width: isOpened ? 240 : theme.spacing(7),
  position: "static",
  transition: isOpened
    ? theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    : theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  "& .MuiDrawer-paper": {
    background: "#D8DCD6",
    position: "static",
    overflowX: "hidden",
  },
}));

const CustomDrawer = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <StyledDrawer
      variant={isLargeScreen ? "permanent" : "temporary"}
      open={!isLargeScreen && isOpened ? true : false}
      onClose={() => toggleIsOpened(!isOpened)}
      isOpened={isOpened}
    >
      <MenuItemsList />
    </StyledDrawer>
  );
};

export default CustomDrawer;
