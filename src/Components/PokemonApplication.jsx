import React, { useState, useEffect } from "react";
import "../style/pokemonApp.css";
import { v4 as uuidv4 } from "uuid";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  const [pokemonName, setPokemonName] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch(" https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemonName(data.results);
        console.log(data.results);
      });
  }, []);

  function handleSelectedPokemon(event) {
    const selectedName = event.target.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedName}`)
      .then((response) => response.json())
      .then((data) => setSelectedPokemon(data));
  }

  return (
    <div>
      <h1>Discover Your Pokémon!</h1>
      <select className="list-container" onChange={handleSelectedPokemon}>
        <option>Choose a Pokemon</option>
        {pokemonName
          ? pokemonName.map((result) => {
              return (
                <option key={uuidv4()} value={result.id}>
                  {result.name}
                </option>
              );
            })
          : null}
      </select>
      {selectedPokemon && <Pokemon data={selectedPokemon} />}
    </div>
  );
}

export default PokemonApplication;
