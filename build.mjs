// Builds the GitHub Pages copy of the game.
// index.html is written for claude.ai artifacts, which add the document skeleton themselves,
// so the website copy gets a doctype and viewport tag in front of it.
// Run with: node build.mjs
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const page = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const head = [
  '<!doctype html>',
  '<html lang="en">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  '<meta name="description" content="A falling-block game fifty columns wide, with 42 shades and lobbies for up to 5 players.">',
  '',
].join('\n');

mkdirSync(new URL('./docs/', import.meta.url), { recursive: true });
writeFileSync(new URL('./docs/index.html', import.meta.url), head + page);
writeFileSync(new URL('./docs/.nojekyll', import.meta.url), '');
console.log('Built docs/index.html');
