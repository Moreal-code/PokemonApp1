import "../style/pokemonApp.css";

function Pokemon({ data }) {
  return (
    <div className="pokemon-container">
      <h2>{data.name.toUpperCase()}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Type: {data.types.map((type) => type.type.name) + ""}</p>
      <p>Weight: {data.weight}</p>
      <p>Height: {data.height}</p>
    </div>
  );
}

export default Pokemon;
