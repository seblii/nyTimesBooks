import { Paper } from "@mui/material";
import React, { ReactNode } from "react";

export const List: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Paper variant="elevation">{children}</Paper>;
};

export default List;
