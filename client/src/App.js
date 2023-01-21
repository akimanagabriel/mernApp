// import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Topbar from "./components/shared/Topbar";
import { Routes, Route } from "react-router-dom";
import Upload from "./components/scenes/Upload";

function App() {
  const mode = useSelector((state) => state.mode.value);
  const theme = createTheme({
    palette: { mode },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <Routes>
        <Route
          path="/"
          element={<Typography variant="h1">Homepage</Typography>}
        />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
