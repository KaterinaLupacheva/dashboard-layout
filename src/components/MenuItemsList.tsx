import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { DRAWER_LIST } from "../constants/menu";
import MenuItem from "./MenuItem";

const MenuItemsList = () => {
  const { pathname } = useLocation();

  return (
    <Grid>
      <List sx={{ p: 0 }}>
        {DRAWER_LIST.map(({ literal, route, Icon }) => (
          <MenuItem
            Icon={Icon}
            literal={literal}
            route={route}
            key={route}
            selected={pathname === route}
          />
        ))}
      </List>
    </Grid>
  );
};

export default MenuItemsList;
