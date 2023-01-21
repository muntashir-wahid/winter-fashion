import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";
import { CartContext } from "../../store/CartContext/CartContextProvider";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";

const Cart = () => {
  const { cart, deleteFromCartHandler, checkoutProductHandler } =
    useContext(CartContext);
  const { currUser } = useContext(CurrUserContext);

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SecondaryHeading>Here is your Cart {currUser?.name}</SecondaryHeading>
        <p>
          You choose some products from our collections. Now you can buy some of
          them.
        </p>
      </SectionHeaderWrapper>

      {cart.length === 0 && (
        <div className="max-w-md mx-auto py-12">
          <h1 className="text-2xl font-medium text-center">
            Please add some product to your cart from our exclusive collections
          </h1>
          <div className="flex justify-center mt-4">
            <Link to="/all-products" className="btn btn-primary">
              Shop now
            </Link>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <ul>
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem._id}
              itemId={cartItem.productId}
              onDeleteFromCart={deleteFromCartHandler.bind(null, cartItem._id)}
              onCheckOutPorduct={checkoutProductHandler.bind(
                null,
                cartItem._id,
                cartItem.productId
              )}
            />
          ))}
        </ul>
      )}
    </SectionWrapper>
  );
};

export default Cart;
