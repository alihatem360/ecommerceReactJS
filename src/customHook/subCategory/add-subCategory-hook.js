import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { createSubcategory } from "../../redux/actions/subCategoryAction";

const SubCategoryHook = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.categoryReducer.categories);
  const subcategories = useSelector(
    (state) => state.subcategoryReducer.subcategory
  );

  if (subcategories) {
    console.log(subcategories, "subcategories");
  }

  // when user select category from select option
  const handelChange = (e) => {
    setId(e.target.value);
  };

  // when user submit form
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      console.log("لا يوجد اتصال بالانترنت");
      return;
    }
    //  dispatch action create sub category
    setLoading(true);
    await dispatch(
      createSubcategory({
        name,
        category: id,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setName("");
      setId("");
      setLoading(true);
      console.log("تم اضافه التصنيف بنجاح");
    }
  }, [loading]);

  return [id, name, category, loading, handelChange, handelSubmit, setName];
};

export default SubCategoryHook;
