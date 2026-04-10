const puppeteer = require('puppeteer');
const path = require('path');

const files = [
  { html: 'semana1-linkedin-nora.html',      png: 'semana1-linkedin-nora.png',      width: 1200, height: 628  },
  { html: 'semana1-ig-adultomayor-1.html',   png: 'semana1-ig-adultomayor-1.png',   width: 1080, height: 1080 },
  { html: 'semana1-linkedin-teo.html',       png: 'semana1-linkedin-teo.png',       width: 1200, height: 628  },
  { html: 'semana1-ig-hijocuidador.html',    png: 'semana1-ig-hijocuidador.png',    width: 1080, height: 1080 },
  { html: 'semana1-ig-adultomayor-2.html',   png: 'semana1-ig-adultomayor-2.png',   width: 1080, height: 1080 },
];

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const file of files) {
    const page = await browser.newPage();

    await page.setViewport({ width: file.width, height: file.height });

    const url = `file://${path.resolve(__dirname, file.html)}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    const canvas = await page.$('.canvas');
    await canvas.screenshot({ path: file.png });

    await page.close();
    console.log(`Captured: ${file.png} (${file.width}x${file.height})`);
  }

  await browser.close();
  console.log('Done.');
})();
