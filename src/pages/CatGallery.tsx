import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import cat5 from '../assets/cat5.jpg';

function CatGallery() {
  const catImages = [
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Cat Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catImages.map((cat, index) => (
          <img key={index} src={cat} alt={`A cute cat ${index + 1}`} className="w-full h-auto rounded-lg" />
        ))}
      </div>
    </section>
  )
}

export default CatGallery
