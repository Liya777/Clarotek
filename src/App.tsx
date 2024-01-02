import React from "react";
import { Home } from "./Pages";
import { Footer, Header } from "./Components";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="App" sx={{ mx: 12 }}>
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
