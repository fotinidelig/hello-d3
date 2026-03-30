import { useState } from 'react'
import './App.css'

import Card from './Card';
import ElementButton from './ElementButton';

import { pokemons, iconsByType, colorByType } from './pokemonData';

function App() {
  const [filterType, setFilterType] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState(() => new Set());
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredPokemons = filterType
    ? pokemons.filter((pokemon) => pokemon.type.toLowerCase() === filterType)
    : pokemons;

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  const favoritePokemons = pokemons.filter((pokemon) => favoriteIds.has(pokemon.id));

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src="logo.png" alt="Pokemon logo" width="400" />
        </div>
        <div className="app-layout">
          <aside className="sidebar" aria-label="controls">
            {iconsByType.map((icon) => (
              <ElementButton
                key={icon.type}
                label={icon.type}
                iconUrl={icon.iconUrl}
                color={colorByType[icon.type.toLowerCase()]}
                active={filterType === icon.type || (icon.type === "favorites" && showFavorites)}
                onClick={() => {
                  if (icon.type === "favorites") {
                    toggleShowFavorites();
                    setFilterType(null);
                  } else if (icon.type !== "favorites" && showFavorites) {
                    toggleShowFavorites(false);
                    setFilterType(icon.type);
                  } else {
                    setFilterType((prev) => (prev === icon.type ? null : icon.type));
                  }
                }}
              />
            ))}
          </aside>

          <div className="card-grid">
            {showFavorites ? 
            favoritePokemons.map((pokemon) => (
              <Card
                key={pokemon.id}
                title={pokemon.name}
                color={colorByType[pokemon.type.toLowerCase()]}
                id={pokemon.id}
                hp={pokemon.hp}
                attack={pokemon.attack}
                imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                favorite={true}
                onToggleFavorite={() => toggleFavorite(pokemon.id)}
              />
            )) : 
            filteredPokemons.map((pokemon) => (
              <Card
                key={pokemon.id}
                title={pokemon.name}
                color={colorByType[pokemon.type.toLowerCase()]}
                id={pokemon.id}
                hp={pokemon.hp}
                attack={pokemon.attack}
                imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                favorite={favoriteIds.has(pokemon.id)}
                onToggleFavorite={() => toggleFavorite(pokemon.id)}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="footer">
          <span>&copy; Fotini Deligiannaki</span>
          <span style={{ fontSize: '13px' }}>
            <a href="https://github.com/fotinidelig/hello-d3">View on Github</a>
          </span>
        </div>
      </section>
    </>
  )
}

export default App
