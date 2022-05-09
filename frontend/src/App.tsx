import { Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";
import React from "react";
import Router from "./Router";

const Margin = styled("div")({
  margin: "60px",
});

function App() {
  return (
    <Margin>
      <Typography variant="h4">New York Times Bestsellers</Typography>
      <Router />
    </Margin>
  );
}

export default App;
