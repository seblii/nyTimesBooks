import { useEffect, useState } from "react";
import "./App.css";
import {
  Book,
  Review,
  BookCategory,
  BooksService,
  DefaultService,
  ReviewsService,
} from "./api";
import Box from "@mui/material/Box";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom";

type BookCategoryTableRow = {
  id: number;
  display_name: string;
  list_name_encoded: string;
} | null;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookGategoryList />} />
        <Route path="/list/:encodedListName" element={<BookList />} />
        <Route path="/review/:isbn13" element={<Review />} />
      </Routes>
    </Router>
  );
}

function BookGategoryList() {
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
}

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const { encodedListName } = useParams();

  useEffect(() => {
    if (!encodedListName) return;

    BooksService.getBestSellersList(encodedListName).then((books) => {
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
}

function Review() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { isbn13 } = useParams();

  useEffect(() => {
    if (!isbn13) return;

    ReviewsService.getReviews(isbn13).then((reviews) => {
      setReviews(reviews);
    });
  }, [isbn13]);

  return (
    <Box
      sx={{
        display: "table",
      }}
    >
      {reviews.map((review) => (
        <Box>
          <Box>
            <strong>
              <a href={review.url}>{review.url}</a>
            </strong>
          </Box>
          <Box>{review.summary}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default App;
