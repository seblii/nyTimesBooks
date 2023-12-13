import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { BookCategory, DefaultService } from "../api";
import List from "./List";
import ListItem from "./ListItem";
import { Typography } from "@mui/material";

type BookCategoryTableRow = {
  id: number;
  display_name: string;
  list_name_encoded: string;
} | null;

export const BookGategoryList = () => {
  const [booklists, setBooklists] = useState<BookCategoryTableRow[]>([]);
  const [status, setStatus] = useState<string>(" Loading... ");

  useEffect(() => {
    DefaultService.getListNames()
      .then((response) => {
        let id = 0;
        const rows: BookCategoryTableRow[] = response.map(
          (list: BookCategory) => {
            if (!list.display_name || !list.list_name_encoded) return null;
            return {
              id: id++,
              display_name: list.display_name,
              list_name_encoded: list.list_name_encoded,
            };
          }
        );
        setBooklists(rows);
        setStatus(" Load finished! ");
      })
      .catch(() => {
        setStatus(" Loading error! ");
      });
  }, []);

  return (
    <List>
      {!booklists.length && <Typography variant="body1"> {status} </Typography>}
      {booklists.map((list) => (
        <ListItem>
          <Box
            key={list?.id}
            sx={{ textAlign: "left", border: "1px solid #ddd", padding: "4px" }}
          >
            <Link to={`/list/${list?.list_name_encoded}`}>
              <Typography variant="body1">{list?.display_name}</Typography>
            </Link>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default BookGategoryList;
