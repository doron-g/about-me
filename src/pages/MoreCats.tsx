import { useState } from 'react';

function MoreCats() {
  const [catImages, setCatImages] = useState<string[]>([]);

  const fetchMoreCats = async () => {
    const newImages = await Promise.all(
      Array.from({ length: 5 }).map(() =>
        fetch('https://loremflickr.com/320/240/cat').then((res) => res.url)
      )
    );
    setCatImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">More Cats</h2>
      <button
        onClick={fetchMoreCats}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Fetch More Cats
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catImages.map((cat, index) => (
          <img key={index} src={cat} alt={`A cute cat ${index + 1}`} className="w-full h-auto rounded-lg" />
        ))}
      </div>
    </section>
  );
}

export default MoreCats;
