import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function card_icons() {
    const dispatch = useDispatch();

    const addToCartHandler = (product, qty) => {
        dispatch(addToCart({ ...product, qty }));
        toast.success('Item added successfully');
      };

  return (
    <div>
        <div className='absolute inset-0 flex items-start justify-between pt-20 px-20'>
            <button 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent group-hover:bg-white transition-all"
            onClick={() => addToCartHandler(manga, 1)}>
                <MdOutlineShoppingCart className="text-3xl text-transparent group-hover:text-black transition-all" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent group-hover:bg-white transition-all">
                <FaRegHeart className="text-3xl text-transparent group-hover:text-black transition-all" />
            </button>
        </div>
    </div>
  )
}
