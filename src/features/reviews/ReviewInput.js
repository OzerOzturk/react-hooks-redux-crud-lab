import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({ restaurantId }) {
  const [comment, setComment] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewAdded({ comment, restaurantId }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:{" "}
          <textarea name="comment" value={comment} onChange={handleChange} />
        </label>
        <button type="submit">add review</button>
      </form>
    </div>
  );
}

export default ReviewInput;
