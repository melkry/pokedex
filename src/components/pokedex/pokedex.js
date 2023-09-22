import React, { useEffect } from "react";
import "./pokedex.css";
import { getRandomInt, toTitleCase, getWeaknesses } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { selectPokemon, getPokemon } from "../../features/pokemon/pokemonSlice";
import { selectSpecies, getSpecies } from "../../features/species/speciesSlice";

export const Pokedex = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);
  const species = useSelector(selectSpecies);
  const weaknesses = getWeaknesses(pokemon.types);
  const description = species.descriptions[0]
    ? species.descriptions[0].flavor_text
    : "";

  useEffect(() => {
    dispatch(getPokemon("pokemon/1"));
    dispatch(getSpecies("pokemon-species/1"));
  }, [dispatch]);

  const handleClick = () => {
    let pokeInput = document.getElementById("inputPokemon").value.toLowerCase();
    // get a random pokemon if no input, else use input
    if (pokeInput === "") {
      pokeInput = getRandomInt(1281);
    }

    dispatch(getPokemon(`pokemon/${pokeInput}`));
    dispatch(getSpecies(`pokemon-species/${pokeInput}`));
  };

  return (
    <div>
      <div className="container my-4 d-flex flex-column justify-content-center align-items-center">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="inputPokemon"
            aria-describedby="pokemonHelp"
            placeholder="Enter pokemon"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleClick();
              }
            }}
          />
          <small id="pokemonHelp" className="form-text text-muted">
            Or leave empty for a random pokemon!
          </small>
        </div>
        <button
          className="btn btn-success mt-3"
          id="submitBtn"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header" id="pokeIdName">
                #{pokemon.id} {pokemon.name}
              </div>
              <div className="card-body">
                <img
                  src={pokemon.spriteUrl}
                  alt={pokemon.name}
                  className="pokemon-image"
                  id="pokeSprite"
                />

                <section id="description" className="container">
                  <p id="pokeDesc">{description}</p>
                </section>

                <section id="types" className="container">
                  <h4>Type:</h4>
                  <div id="outputType">
                    {pokemon.types.map((x) => {
                      return (
                        <span className={`type ${x}`} key={x}>
                          {x}
                        </span>
                      );
                    })}
                  </div>
                </section>

                <section id="weakness" className="container my-4">
                  <h4>Weaknesses:</h4>
                  <div id="outputWeaknesses">
                    {weaknesses.map((x) => {
                      return (
                        <span className={`type ${x}`} key={x}>
                          {x}
                        </span>
                      );
                    })}
                  </div>
                </section>

                <section
                  id="stats"
                  className="my-4 container bg-warning p-2 rounded"
                >
                  <h4>Base Stats:</h4>
                  <ul
                    className="list-unstyled d-flex justify-content-around text-center"
                    id="outputStats"
                  >
                    <li className="d-flex flex-column">
                      <strong>HP</strong>
                      <span>{pokemon.stats.hp}</span>
                    </li>
                    <li className="d-flex flex-column">
                      <strong>Atk</strong>
                      <span>{pokemon.stats.atk}</span>
                    </li>
                    <li className="d-flex flex-column">
                      <strong>Def</strong>
                      <span>{pokemon.stats.def}</span>
                    </li>
                    <li className="d-flex flex-column">
                      <strong>SpAtk</strong>
                      <span>{pokemon.stats.spAtk}</span>
                    </li>
                    <li className="d-flex flex-column">
                      <strong>SpDef</strong>
                      <span>{pokemon.stats.spDef}</span>
                    </li>
                    <li className="d-flex flex-column">
                      <strong>Spd</strong>
                      <span>{pokemon.stats.spd}</span>
                    </li>
                  </ul>
                </section>

                <section id="abilities" className="my-4 container">
                  <h4>Abilities:</h4>
                  <ul id="abilitiesOutput">
                    {pokemon.abilities.map((x) => {
                      return <li key={x}>{toTitleCase(x)}</li>;
                    })}
                  </ul>
                </section>

                <section id="information" className="container my-4">
                  <ul className="list-unstyled d-flex justify-content-between text-center">
                    <li className="d-flex flex-column bg-info p-2 rounded">
                      <strong>Height</strong>
                      <span className="pokemon-info" id="pokeHeight">
                        {pokemon.height}"
                      </span>
                    </li>
                    <li className="d-flex flex-column bg-info p-2 rounded">
                      <strong>Weight</strong>
                      <span className="pokemon-info" id="pokeWeight">
                        {pokemon.weight}
                      </span>
                    </li>
                    <li className="d-flex flex-column bg-info p-2 rounded">
                      <strong>Catch %</strong>
                      <span className="pokemon-info" id="pokeCatch">
                        {species.captureRate}
                      </span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
