const TOTAL_POKEMONS = 12;
const TOTAL_PAGES = 5;

function generateRoutes(path, total) {
  return Array.from({ length: total }, (_, i) => `${path}/${i + 1}`).join('\n');
}

async function generateRoutesForPokemons(path, total) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + total)
    .then(res => res.json())
    .catch(err => {
      console.error(err)
      return Promise.resolve({ results: []});
    });
  return pokemons.results.map(({ name }) => `${path}/${name}`).join('\n');
}

(async _ => {
  const fs = require('node:fs');
  const pagePaths = generateRoutes('/pokemons/page', TOTAL_PAGES);
  const pokemonPaths = generateRoutes('/pokemons', TOTAL_POKEMONS);
  const pokemonNamePaths = await generateRoutesForPokemons('/pokemons', TOTAL_POKEMONS);
  const routes = `${pagePaths}\n${pokemonPaths}\n${pokemonNamePaths}`;
  fs.writeFileSync('./routes.txt', routes);
  console.log('Routes generated');
})()