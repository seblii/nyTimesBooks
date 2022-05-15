import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useParams } from "react-router-dom";
import { Link, styled, Typography } from "@mui/material";
import { InlineResponse2002 as IReview } from "../api";

interface IReviews {
  reviews: IReview[];
}
const Padding = styled("div")({
  paddingLeft: "50px",
});
const Reviews = (props: IReviews) => {
  const { reviews } = props;
  const params = useParams();

  if (!reviews.length) {
    return (
      <TableRow>
        <TableCell colSpan={3}>
          <Typography variant="subtitle2">
            No reviews for isbn {params.isbn}
          </Typography>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {reviews.map((review: IReview) => (
        <TableRow>
          <TableCell colSpan={3}>
            <Padding>
              <Typography variant={"subtitle2"}>{review.byline}</Typography>
              <Link href={review.url} variant={"body2"}>
                {review.url}
              </Link>
            </Padding>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default Reviews;
