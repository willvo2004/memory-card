import React, { useEffect, useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import Header from './components/Header/Header';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = ['pikachu', 'charmander', 'bulbasaur', 'squirtle'];
      const newData = await Promise.all(
        pokemons.map(async (pokemonName) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
          const data = await response.json();
          return {
            title: data.species.name,
            icon: data.sprites.front_default
          };
        })
      );
      setPokemonData(newData);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {pokemonData.map((pokemon, index) => (
        <MemoryCard key={index} title={pokemon.title} icon={pokemon.icon} />
      ))}
    </>
  );
}

export default App;
