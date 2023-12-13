import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DefaultService } from "../api/services/DefaultService";
import { Box } from "@mui/material";
import { Review } from "../api/models/Review";

export const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { isbn13 } = useParams();

  useEffect(() => {
    if (!isbn13) return;

    DefaultService.getReviews(parseInt(isbn13)).then((reviews) => {
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
};
