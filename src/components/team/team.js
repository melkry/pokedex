import React from "react";

export const Team = () => {
  return (
    <div className="container">
      <h1>User's Pokémon Team</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              className="card-img-top"
              alt="Pokemon 1"
            />
            <div className="card-body">
              <h5 className="card-title">Bulbasaur</h5>
              <p className="card-text">
                Level: 25
                <br />
                Gender: Male
                <br />
                Health: 80/100
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
              className="card-img-top"
              alt="Pokemon 2"
            />
            <div className="card-body">
              <h5 className="card-title">Charmander</h5>
              <p className="card-text">
                Level: 18
                <br />
                Gender: Female
                <br />
                Health: 70/100
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
              className="card-img-top"
              alt="Pokemon 3"
            />
            <div className="card-body">
              <h5 className="card-title">Squirtle</h5>
              <p className="card-text">
                Level: 22
                <br />
                Gender: Male
                <br />
                Health: 90/100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
