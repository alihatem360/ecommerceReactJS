import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
const AddProductToCartHook = (productID, produc) => {
  const dispatch = useDispatch();
  const [clickedColor, setClickedColor] = useState("");
  const [clickedColorIndex, setClickedColorIndex] = useState("");
  const handelClickedColor = (index, color) => {
    setClickedColor(color);
    setClickedColorIndex(index);
  };

  const [loading, setLoading] = useState(false);
  //   handel add to cart
  const addToCartHandler = async () => {
    if (produc.availableColors) {
      if (clickedColor === "") {
        console.log("يجب اختيار لون المنتج");
        return;
      }
    }

    setLoading(true);
    await dispatch(
      addToCart({
        productId: productID,
        color: clickedColor,
      })
    );
    setLoading(false);
  };

  // get data after add to cart
  const cart = useSelector((state) => state.cartReducer.cart);

  useEffect(() => {
    if (!loading) {
      if (cart.status === "success") {
        console.log("تم اضافة المنتج الي السلة بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  }, [cart, loading]);

  return [
    cart,
    addToCartHandler,
    clickedColor,
    handelClickedColor,
    clickedColorIndex,
  ];
};

export default AddProductToCartHook;
