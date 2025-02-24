import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress, savePaymentMethod } from "../redux/features/cartSlice";
import ProgressSteps from "../Components/ProgressSteps";

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
  const [country, setCountry] = useState(shippingAddress.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div className="pt-24">
      <ProgressSteps step1 step2 />
      <div className="container mx-auto pt-12">
        <div className="mb-20 mt-10 flex justify-around items-center flex-wrap">
          <form onSubmit={submitHandler} className="w-[40rem]">
            <h1 className="text-2xl font-semibold mb-4">Shipping</h1>
            <div className="mb-4">
              <label className="block text-black mb-2">Address</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Enter address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">City</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Enter city"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Postal Code</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Enter postal code"
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Country</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Enter country"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Select Method</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="paymentMethod"
                    value="PayPal"
                    checked={paymentMethod === "PayPal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="ml-2">PayPal or Credit Card</span>
                </label>
              </div>
            </div>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg hover:bg-blue-500"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
