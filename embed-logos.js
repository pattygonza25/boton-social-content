const fs = require('fs');
const path = require('path');

const htmlFiles = [
  'semana1-linkedin-nora.html',
  'semana1-ig-adultomayor-1.html',
  'semana1-linkedin-teo.html',
  'semana1-ig-hijocuidador.html',
  'semana1-ig-adultomayor-2.html',
];

const logo7 = `data:image/png;base64,${fs.readFileSync(path.join(__dirname, 'Recurso_7.png')).toString('base64')}`;
const logo8 = `data:image/png;base64,${fs.readFileSync(path.join(__dirname, 'Recurso_8.png')).toString('base64')}`;

for (const file of htmlFiles) {
  const filePath = path.join(__dirname, file);
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replaceAll('src="Recurso_7.png"', `src="${logo7}"`);
  html = html.replaceAll('src="Recurso_8.png"', `src="${logo8}"`);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated: ${file}`);
}

console.log('Done.');
