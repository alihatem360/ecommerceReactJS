import { editReview } from "../../redux/actions/reviewAction";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const EditeReviewHook = (item) => {
  const dispatch = useDispatch();
  // القيم المبدئية للتعديل
  const [newRateText, setNewRateText] = useState(item.review);
  const [newRate, setNewRate] = useState(item.rating);
  const [showEdite, setShowEdite] = useState(false);
  const handleCloseEdite = () => setShowEdite(false);
  const handleShowEdite = () => setShowEdite(true);
  const [loading, setLoading] = useState(false);
  const handelNewRateText = (e) => {
    setNewRateText(e.target.value);
  };
  const handelNewRate = (value) => {
    setNewRate(value);
  };

  const handelEdite = () => {
    if (newRateText === "" || newRate === 0) {
      console.log("عليك كتابة تقييم");
      return;
    }
    if (newRateText === item.review && newRate === item.rating) {
      console.log("لم تقم بتعديل اي شيء");
      return;
    }
    setLoading(true);
    dispatch(
      editReview(item._id, {
        review: newRateText,
        rating: newRate,
      })
    );
    handleCloseEdite();
    setLoading(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const reviewResponse = useSelector(
    (state) => state.reviewReducer.updatedReview
  );

  useEffect(() => {
    if (reviewResponse.data) {
      console.log("تم تعديل التقييم بنجاح");
    }
    if (reviewResponse.status === 500) {
      console.log("عليك كتابة تقييم");
    }
  }, [reviewResponse]);

  return [
    showEdite,
    handleCloseEdite,
    handleShowEdite,
    handelEdite,
    newRateText,
    handelNewRateText,
    newRate,
    handelNewRate,
  ];
};

export default EditeReviewHook;
