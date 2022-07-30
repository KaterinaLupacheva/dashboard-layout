import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { DrawerItem } from "../ts";

type Props = DrawerItem & {
  selected?: boolean;
  onClick?: () => void;
};

const MenuItem: React.FC<Props> = ({
  route,
  literal,
  Icon,
  selected,
  onClick,
}) => {
  const link = (
    <ListItem
      button
      selected={selected}
      sx={{
        "&.Mui-selected": {
          backgroundColor: "primary.dark",
          color: "common.white",
        },
        "&:hover": {
          backgroundColor: "primary.light",
          color: "common.white",
        },
      }}
      onClick={onClick}
    >
      <ListItemIcon
        sx={[
          { minWidth: "auto" },
          (theme) => ({
            paddingRight: theme.spacing(2),
          }),
        ]}
      >
        <Icon sx={{ color: "secondary.dark" }} />
      </ListItemIcon>
      <ListItemText primary={literal} />
    </ListItem>
  );
  return route ? <Link to={route}>{link}</Link> : link;
};

export default MenuItem;
