import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DefaultService } from "../api/services/DefaultService";
import { Book } from "../api/models/Book";
import List from "./List";
import ListItem from "./ListItem";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { encodedListName } = useParams();
  const [status, setStatus] = useState<string>(" Loading... ");

  useEffect(() => {
    if (!encodedListName) return;

    DefaultService.getCategory(encodedListName)
      .then((books) => {
        setBooks(books);
      })
      .catch(() => {
        setStatus(" Loading error! ");
      });
  }, [encodedListName]);

  return (
    <List>
      {!books.length && <Typography variant="body1"> {status} </Typography>}
      {books.map((book) => (
        <ListItem>
          <Box
            sx={{ padding: "4px", display: "flex", border: "1px solid #ccc;" }}
          >
            <Box sx={{ padding: "4px", width: "80px", textAlign: "center" }}>
              <img src={book.book_image} height="80" />
            </Box>
            <Box>
              <Typography variant="body1">
                <Link to={`/review/${book.primary_isbn13}`}>{book.title}</Link>
              </Typography>
              <Typography variant="body1">{`by ${book.author}`}</Typography>
            </Box>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
