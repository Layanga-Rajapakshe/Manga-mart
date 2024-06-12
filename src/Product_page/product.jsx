import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
import { toast } from 'react-hot-toast';
import ProductDetails from './product_details';
import Favourite_button from './favourite_button';
import Loader from '../Components/Loader';

export default function Product() {
  const { id } = useParams();
  const [manga, setManga] = useState({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const getManga = async (query) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga/${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setManga(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching manga:', error);
      setError(error);
      setLoading(false);
    }
  };

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success('Item added successfully');
  };

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setData({ message: 'Data loaded successfully!' });
      setLoading(false);
    }, 5000); // 5 seconds delay
  }, []);

  useEffect(() => {
    getManga(id);
  }, [id]);

  return (
    <div>
      {loading ? <Loader /> :
    <section className="text-gray-700 body-font overflow-hidden bg-white pt-12">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={manga.images?.jpg?.image_url}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {manga.authors && manga.authors.map((item, index) => (
                <div key={index}>
                  {item.name}
                </div>
              ))}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {manga.title}
            </h1>

            <ProductDetails manga={manga} />

            <div className="flex items-center mt-3">
              <span className="h-px flex-1 bg-black"></span>
            </div>

            <div className="flex mt-3">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button
                onClick={() => addToCartHandler(manga, 1)}
                className="flex ml-auto text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded"
              >
                Add to cart
              </button>
              <Favourite_button product={manga}/>
            </div>
          </div>
        </div>
      </div>
    </section>
      }
    </div>
  );
}
