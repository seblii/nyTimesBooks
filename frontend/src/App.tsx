import { Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";

const Margin = styled("div")({
  margin: "60px",
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Margin>
        <Typography variant="h4">New York Times Bestsellers</Typography>
        <Router />
      </Margin>
    </QueryClientProvider>
  );
}

export default App;
