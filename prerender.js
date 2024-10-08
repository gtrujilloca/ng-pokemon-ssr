const TOTAL_POKEMONS = 12;
const TOTAL_PAGES = 5;

function generateRoutes(path, total) {
  return Array.from({ length: total }, (_, i) => `${path}/${i + 1}`).join('\n');
}

(async _ => {
  const fs = require('node:fs');
  const pagePaths = generateRoutes('/pokemons/page', TOTAL_PAGES);
  const pokemonPaths = generateRoutes('/pokemons', TOTAL_POKEMONS);
  const routes = pagePaths + '\n' + pokemonPaths;
  fs.writeFileSync('./routes.txt', routes);
  console.log('Routes generated');
})()