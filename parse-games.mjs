import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('games-data.md', 'utf-8');
const lines = content.split('\n').map(l => l.trim());

const games = [];
let i = 0;

// Skip header until we find "Games:"
while (i < lines.length && lines[i] !== 'Games:') {
  i++;
}
i++; // Skip "Games:" line

let currentGame = null;
let inExtras = false;
let extraGame = null;

while (i < lines.length) {
  const line = lines[i];

  // Check for Extras section
  if (line === 'Extras:') {
    inExtras = true;
    extraGame = {
      id: 'extras',
      name: 'Extras',
      priceEUR: 0,
      priceCZK: 100,
      images: [],
      isExtra: true
    };
    i++;
    continue;
  }

  if (inExtras) {
    // In extras section, collect items and the image
    if (line.startsWith('IMG')) {
      extraGame.images.push(line);
    } else if (line.endsWith('CZK')) {
      const price = parseInt(line.replace('CZK', '').trim());
      extraGame.priceCZK = price;
    }
    i++;
    continue;
  }

  // Regular game parsing
  if (line === '' || !line) {
    if (currentGame && currentGame.name) {
      games.push(currentGame);
      currentGame = null;
    }
    i++;
    continue;
  }

  // Check if it's an image
  if (line.startsWith('IMG')) {
    if (currentGame) {
      currentGame.images.push(line);
    }
    i++;
    continue;
  }

  // Check if it's marked as SOLD
  if (line === 'SOLD') {
    if (currentGame) {
      currentGame.sold = true;
    }
    i++;
    continue;
  }

  // Check if it's a price in EUR
  if (line.endsWith('EUR')) {
    if (currentGame) {
      currentGame.priceEUR = parseInt(line.replace('EUR', '').trim());
    }
    i++;
    continue;
  }

  // Check if it's a price in CZK
  if (line.endsWith('CZK')) {
    if (currentGame) {
      currentGame.priceCZK = parseInt(line.replace('CZK', '').trim());
    }
    i++;
    continue;
  }

  // Otherwise it's a game name
  if (!currentGame || !currentGame.name) {
    if (currentGame && currentGame.name) {
      games.push(currentGame);
    }
    currentGame = {
      id: line.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: line,
      priceEUR: 0,
      priceCZK: 0,
      images: [],
      sold: false
    };
  }

  i++;
}

// Add last game if exists
if (currentGame && currentGame.name) {
  games.push(currentGame);
}

// Add extras if they exist
if (extraGame) {
  extraGame.priceEUR = 4; // Set EUR price for extras
  games.push(extraGame);
}

// Add conditions to games (skip extras)
games.forEach(game => {
  if (game.isExtra) {
    game.condition = ''; // No condition for extras
  } else if (game.name === 'Escape from aliens in outer space') {
    game.condition = 'Acceptable';
  } else if (game.images.length > 1) {
    game.condition = 'Very good';
  } else {
    game.condition = 'Like new';
  }
});

// Write to JSON file
writeFileSync('src/data/games.json', JSON.stringify(games, null, 2));

console.log(`✅ Parsed ${games.length} games`);
console.log('Games:', games.map(g => g.name).join(', '));
