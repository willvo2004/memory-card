import { useState, useEffect } from 'react';    
import MemoryCard from '../MemoryCard/MemoryCard';
import Score from '../Score/Score';
import './MemoryCardList.css';

const MemoryCardList = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          const pokemons = ['pikachu', 'charmander', 'bulbasaur', 'squirtle', 'gible', 'metapod'];
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
    
    const handleCardClick = (id) => {
    // Shuffle the array
    const shuffledData = [...pokemonData].sort(() => Math.random() - 0.5)
    setPokemonData(shuffledData);

    if (!selectedPokemon.includes(id)) {
        setSelectedPokemon([...selectedPokemon, id]);
        setScore(score + 1);
    }
    else {
        if (score > bestScore) {
          setBestScore(score);
        }
        setSelectedPokemon([]);
        setScore(0);
    }
  };

    return (
        <>  
            <Score score={score} bestScore={bestScore} />
            <div className="list-wrapper">
                {pokemonData.map((pokemon) => (
                    <MemoryCard key={pokemon.id} title={pokemon.title} icon={pokemon.icon} handleClick={() => handleCardClick(pokemon.id)} />
                ))}
            </div>
        </>
    )
}

export default MemoryCardList;