import { useState, useEffect } from 'react';
import Aboutcard from './aboutcard';
import Loader from '../Components/Loader';

export default function Aboutpage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setData({ message: 'Data loaded successfully!' });
      setLoading(false);
    }, 5000); // 5 seconds delay
  }, []);

  return (
    <div className='pt-14'>
      {loading ? <Loader /> : 
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
            <div class="xl:flex xl:items-center xL:-mx-4">
                <div class="xl:w-1/2 xl:mx-4">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">About Me</h1>

                    <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>
                </div>
                    <Aboutcard />
            </div>
        </div>
      </section>
      }
    </div>
  )
}
