import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DefaultService } from "../api/services/DefaultService";
import { Book } from "../api/models/Book";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { encodedListName } = useParams();

  useEffect(() => {
    if (!encodedListName) return;

    DefaultService.getCategory(encodedListName).then((books) => {
      setBooks(books);
    });
  }, [encodedListName]);

  return (
    <Box
      sx={{
        display: "table",
      }}
    >
      {books.map((book) => (
        <Box
          key={book.primary_isbn10}
          sx={{ display: "flex", textAlign: "left" }}
        >
          <Box sx={{ padding: "4px" }}>
            <img src={book.book_image} height="80" />
          </Box>
          <Box>
            <Box>
              <Link to={`/review/${book.primary_isbn13}`}>{book.title}</Link>
            </Box>
            <Box>{`by ${book.author}`}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BookList;
