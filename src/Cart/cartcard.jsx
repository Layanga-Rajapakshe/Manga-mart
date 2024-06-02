import React from 'react'
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function cartcard({item}) {
    const dispatch = useDispatch();
    
  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
        <div key={item._id} className="flex items-center mb-4 pb-2 border-b">
            <div className="w-[5rem] h-[5rem]">
                <img
                src={item.images.jpg.image_url}
                alt="manga cover"
                className="w-full h-full object-cover rounded"
                />
            </div>

            <div className="flex-1 ml-4">
                <Link to={`/product/${item.mal_id}`} className="text-black">
                {item.title}
                </Link>

                <div className="mt-2 text-black font-bold">$58.00</div>
            </div>

            <div className="w-24">
                <select
                className="w-full p-1 border rounded text-black"
                value={item.qty}
                onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                >
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                    {x + 1}
                    </option>
                ))}
                </select>
            </div>

            <div>
                <button
                className="text-red-500 ml-4"
                onClick={() => removeFromCartHandler(item.mal_id)}
                >
                <FaTrash />
                </button>
            </div>
            </div>
    </div>
  )
}
