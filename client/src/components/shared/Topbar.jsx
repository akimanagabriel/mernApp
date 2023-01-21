import { Stack } from "@mui/system";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import { useDispatch } from "react-redux";
import { changeMode } from "../../store/slice";
import { useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navmenu = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Menubtn = styled(Button)({
  color: "white",
});

function Topbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <AppBar position="sticky">
      <Navmenu>
        <Box
          display={"flex"}
          flexDirection="row"
          gap={"1em"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: 0.6,
            },
          }}
          onClick={() => navigate("/")}
        >
          <PetsOutlinedIcon />
          <Typography variant="h6">GDEV</Typography>
        </Box>
        <Stack direction={"row"} gap="1em">
          <Menubtn
            variant="text"
            sx={{ color: "white" }}
            onClick={() => navigate("/upload")}
          >
            Upload
          </Menubtn>
          <Menubtn variant="text" color="secondary">
            Get started
          </Menubtn>
          <IconButton
            variant="contained"
            color="secondary"
            onClick={() => dispatch(changeMode())}
          >
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </Stack>
      </Navmenu>
    </AppBar>
  );
}

export default Topbar;
