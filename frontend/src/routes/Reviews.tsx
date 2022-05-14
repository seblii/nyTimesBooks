import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { useParams } from "react-router-dom";
import { Link, Typography } from "@mui/material";
import { InlineResponse2002 as IReview } from "../api";
import { useQuery } from "react-query";
import NYTimesClient from "./NYTimesClient";

const Reviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const params = useParams();

  useQuery(`reviews/${params.isbn}`, () => {
    const validIsbn = params.isbn && parseInt(params.isbn);
    if (!validIsbn) {
      throw new Error(`Parameter 'isbn' is missing or invalid`);
    }

    NYTimesClient.reviewsIsbnGet(validIsbn).then((response) => {
      const reviews = response.data as IReview[];
      setReviews(reviews);
    });
  });

  if (!reviews.length) {
    return <Typography>No reviews for isbn {params.isbn}</Typography>;
  }

  return (
    <div>
      <TableContainer>
        <Table>
          <TableBody>
            {reviews.map((review) => (
              <TableRow>
                <TableCell>
                  <Typography variant={"body1"}>{review.byline}</Typography>
                  <Link href={review.url} variant={"body2"}>
                    {review.url}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Reviews;
