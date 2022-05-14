import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { InlineResponse2001 as IBook } from "../api";
import { useQuery } from "react-query";
import NYTimesClient from "./NYTimesClient";

const TopBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const params = useParams();

  useQuery(`topbooks/${params.listName}`, () => {
    if (!params.listName) {
      return;
    }
    NYTimesClient
      .bestsellersListNameEncodedGet(params.listName)
      .then((response) => {
        const books = response.data as IBook[];
        setBooks(books);
      });
  });

  return (
    <div>
      <TableContainer>
        <Table>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.isbn}>
                <TableCell>
                  <Typography variant={"body1"}>{book.title}</Typography>
                  <Typography variant={"body2"}>by {book.author}</Typography>
                </TableCell>
                <TableCell>
                  <Link to={`/reviews/${book.isbn}`}>Show reviews</Link>
                </TableCell>
                <TableCell>{book.isbn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopBooks;
