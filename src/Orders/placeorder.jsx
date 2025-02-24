import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ProgressSteps from "../Components/ProgressSteps";
import { useCreateOrderMutation } from "../redux/api/orderApiSlice";
import { clearCartItems } from "../redux/features/cartSlice";
import Message from "../Components/Message";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    }
  }, [cart.shippingAddress.address, navigate]);

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      toast.success('Order placed successfully');
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (error) {
      console.error('Error details:', error); // Log error details
      toast.error(error.data?.message || 'Failed to place order');
    }
  };

  return (
    <div className="pt-24">
      <ProgressSteps step1 step2 step3 />

      <div className="container mx-auto px-4 my-12">
        {cart.cartItems.length === 0 ? (
          <Message>Your cart is empty</Message>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <td className="px-1 py-2 text-left align-top">Image</td>
                  <td className="px-1 py-2 text-left">Product</td>
                  <td className="px-1 py-2 text-left">Quantity</td>
                  <td className="px-1 py-2 text-left">Price</td>
                  <td className="px-1 py-2 text-left">Total</td>
                </tr>
              </thead>

              <tbody>
                {cart.cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2">
                      <img
                        src={item.images.jpg.image_url}
                        alt={item.title}
                        className="w-16 h-16 object-cover"
                      />
                    </td>

                    <td className="p-2">
                      <Link to={`/product/${item.product}`}>{item.title}</Link>
                    </td>
                    <td className="p-2">{item.qty}</td>
                    <td className="p-2">${item.price}</td>
                    <td className="p-2">
                      $ {(item.qty * item.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 mx-auto justify-center align-middle">
          <h2 className="text-2xl font-semibold mb-5">Order Summary</h2>
          <div className="flex justify-between flex-wrap p-8 bg-white">
            <ul className="text-lg">
              <li>
                <span className="font-semibold mb-4">Items:</span> $
                {cart.itemsPrice}
              </li>
              <li>
                <span className="font-semibold mb-4">Shipping:</span> $
                {cart.shippingPrice}
              </li>
              <li>
                <span className="font-semibold mb-4">Tax:</span> $
                {cart.taxPrice}
              </li>
              <li>
                <span className="font-semibold mb-4">Total:</span> $
                {cart.totalPrice}
              </li>
            </ul>

            {error && <Message variant="danger">{error.data?.message}</Message>}

            <div>
              <h2 className="text-2xl font-semibold mb-4">Shipping</h2>
              <p>
                <strong>Address:</strong> {cart.shippingAddress.address},{" "}
                {cart.shippingAddress.city} {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
              <strong>Method:</strong> {cart.paymentMethod}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-full text-lg w-full max-w-xs"
              disabled={cart.cartItems.length === 0}
              onClick={placeOrderHandler}
            >
              Place Order
            </button>
          </div>

          {isLoading && (
            <div className="text-center mt-4">
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
