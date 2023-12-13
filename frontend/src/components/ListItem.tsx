import Box from "@mui/material/Box";
import { ReactNode } from "react";

export const ListItem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Box sx={{ textAlign: "left", padding: "4px" }}>{children}</Box>;
};

export default ListItem;
