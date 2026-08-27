import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./AppProvider";

import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

export default function Header({ count }) {
  const { mode, setMode } = useContext(AppContext);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
            <Badge badgeContent={count} color="error">
              ToDo
            </Badge>
          </Typography>
          {mode == "dark" ? (
            <IconButton onClick={() => setMode("light")}>
                <LightModeIcon />
            </IconButton>
          ) : (
              <IconButton onClick={() => setMode("dark")}>
                <DarkModeIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
