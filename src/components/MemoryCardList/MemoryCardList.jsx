import { useState, useEffect } from 'react';    
import MemoryCard from '../MemoryCard/MemoryCard';
import './MemoryCardList.css';

const MemoryCardList = () => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const pokemons = ['pikachu', 'charmander', 'bulbasaur', 'squirtle', 'gible'];
          const newData = await Promise.all(
            pokemons.map(async (pokemonName) => {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
              const data = await response.json();
              return {
                title: data.species.name,
                icon: data.sprites.front_default,
                id: data.id
              };
            })
          );
          setPokemonData(newData);
        };
        fetchData();
      }, []);
    
    const handleCardClick = () => {
    // Shuffle the array
    const shuffledData = [...pokemonData].sort(() => Math.random() - 0.5)
    setPokemonData(shuffledData);
    }

    return (
        <div className="card-wrapper">
            {pokemonData.map((pokemon) => (
                <MemoryCard key={pokemon.id} title={pokemon.title} icon={pokemon.icon} handleClick={handleCardClick} />
            ))}
        </div>
    )
}

export default MemoryCardList;