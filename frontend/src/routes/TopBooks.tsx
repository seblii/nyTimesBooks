import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { useParams } from "react-router-dom";
import { Button, CircularProgress, styled, Typography } from "@mui/material";
import { InlineResponse2001 as IBook } from "../api";
import { InlineResponse2002 as IReview } from "../api";
import { useQuery } from "react-query";
import NYTimesClient from "./NYTimesClient";
import Reviews from "./Reviews";

type ReviewsState = [IReview[]];

const Bar = styled('div')({
  alignContent: 'right',
});

const TopBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [reviews, setReviews] = useState<ReviewsState>([] as unknown as ReviewsState);
  const [isbn, setIsbn] = useState<number | undefined>(undefined);
  const params = useParams();

  const topbooksQuery = useQuery(`topbooks/${params.listName}`, () => {
    if (!params.listName) {
      return;
    }
    return NYTimesClient
      .bestsellersListNameEncodedGet(params.listName)
      .then((response) => {
        const books = response.data as IBook[];
        setBooks(books);
      });
  },
  {
    refetchOnWindowFocus: false,
    enabled: books.length === 0
  });

  const reviewsQuery = useQuery(`reviews/${isbn}`, () => {
    if (!isbn) {
      throw new Error(`Parameter 'isbn' is missing or invalid`);
    }

    return NYTimesClient.reviewsIsbnGet(isbn).then((response) => {
      const bookReviews = response.data as IReview[];
      reviews[isbn] = bookReviews;
      setReviews(reviews);
      setIsbn(undefined);
    });
  }, {
    refetchOnWindowFocus: false,
    enabled: !!isbn && !reviews[isbn] // turned off by default, manual refetch is needed
  });  

  return (
    <div>
      {(topbooksQuery.isLoading || reviewsQuery.isLoading) && (
      <Bar>
        <CircularProgress />
      </Bar>
      )}
      <TableContainer>
        <Table>
          <TableBody>
            {books.map((book) => (
              <React.Fragment key={book.isbn}>
              <TableRow>
                <TableCell>
                  <Typography variant={"body1"}>{book.title}</Typography>
                  <Typography variant={"body2"}>by {book.author}</Typography>
                </TableCell>
                <TableCell>
                  <Button onClick={() => { if (book.isbn) { setIsbn(parseInt(book.isbn)) } } }>Show reviews</Button>
                </TableCell>
                <TableCell>{book.isbn}</TableCell>
              </TableRow>
              {book.isbn && reviews[parseInt(book.isbn)] && <Reviews reviews={reviews[parseInt(book.isbn)]} />}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopBooks;
