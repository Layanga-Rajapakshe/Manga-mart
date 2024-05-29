import React from 'react'

export default function genrepage() {
    const {id} = useParams();

    const [manga, SetManga] = useState([]);

	const GetManga = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/manga?genres=${query}`)
			.then(res => res.json());

		SetManga(temp.data.slice(0,20));
	}

  useEffect(() => {
		GetManga(id);
	}, []);

  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured Manga</h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">Discover the hottest bestsellers at our Top-Selling Manga page, where you'll find the most popular and must-read titles that everyone is talking about</p>
            </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
        {manga.map(manga => (
					<Card key={manga.id} topManga={manga}/>
				))}
        </div>       
      </section>
    </div>
  )
}
