import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { BookCategory, DefaultService } from "../api";

type BookCategoryTableRow = {
  id: number;
  display_name: string;
  list_name_encoded: string;
} | null;

export const BookGategoryList = () => {
  const [booklists, setBooklists] = useState<BookCategoryTableRow[]>([]);

  useEffect(() => {
    DefaultService.getListNames().then((response) => {
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
    });
  }, []);

  return (
    <Box
      sx={{
        display: "table",
      }}
    >
      {booklists.map((list) => (
        <Box key={list?.id} sx={{ textAlign: "left" }}>
          <Link to={`/list/${list?.list_name_encoded}`}>
            {list?.display_name}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default BookGategoryList;
