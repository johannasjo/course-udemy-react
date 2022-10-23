import { uiActions } from "./ui-slice";

import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://meals-1b2ef-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotifcation({
          status: "error",
          title: "Error...",
          message: "Cart data was not fetched, error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifcation({
        status: "pending",
        title: "Sening...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://meals-1b2ef-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotifcation({
          status: "success",
          title: "Success...",
          message: "Cart data was sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotifcation({
          status: "error",
          title: "Error...",
          message: "Cart data was not sent, error",
        })
      );
    }
  };
};
