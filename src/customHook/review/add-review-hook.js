import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { createReview } from "../../redux/actions/reviewAction";
import { createReview } from "../../redux/actions/reviewAction";
const AddReviewHook = (id) => {
  const dispatch = useDispatch();
  const [review, setReview] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [loading, setLoading] = useState(false);

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  const onChangeRating = (value) => {
    setRating(value);
  };

  const onSubmit = async (e) => {
    console.log("onSubmit");
    e.preventDefault();
    console.log("review", review);
    console.log("rating", rating);
    setLoading(true);
    await dispatch(
      createReview(id, {
        review: review,
        rating: rating,
      })
    );
    setLoading(false);
  };

  const reriewResponse = useSelector((state) => state.reviewReducer.review);

  useEffect(() => {
    if (!loading) {
      setReview("");
      setRating(0);
      if (reriewResponse) {
        console.log("reriewResponse", reriewResponse);
      }
      try {
        if (reriewResponse.status === 403) {
          console.log("reriewResponse", reriewResponse.data);
          console.log("reriewResponse", reriewResponse.data.message);
          alert("غير مسموح للادمن بالتقييم");
        }
        if (reriewResponse.status === 400) {
          alert("لقد قمت بالتقييم من قبل");
        }
        if (reriewResponse.data.review) {
          alert("تم اضافة التقييم بنجاح");
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [loading]);

  let user = "";
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  return [review, rating, onChangeReview, onChangeRating, onSubmit, user];
};

export default AddReviewHook;
