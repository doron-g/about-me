import { useState } from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
}

function MoreCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  const fetchMoreCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
    setPage(page + 1);
  };

  return (
    <section className="mb-8">
      <h2 className="text-4xl font-semibold mb-4 text-portal-blue">More Characters</h2>
      <button
        onClick={fetchMoreCharacters}
        className="bg-morty-yellow hover:bg-rick-green text-dark-space font-bold py-2 px-4 rounded mb-4"
      >
        Get More Characters
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="text-center">
            <img src={character.image} alt={character.name} className="w-full h-auto rounded-lg" />
            <p className="text-rick-green mt-2">{character.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MoreCharacters;
