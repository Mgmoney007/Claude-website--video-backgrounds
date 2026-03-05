import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const dir = './temporary screenshots';

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const existing = readdirSync(dir).filter(f => f.startsWith('screenshot-'));
const nextNum = existing.length > 0
  ? Math.max(...existing.map(f => parseInt(f.split('-')[1]))) + 1
  : 1;

const filename = label
  ? `screenshot-${nextNum}-${label}.png`
  : `screenshot-${nextNum}.png`;

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Scroll down slowly to trigger animations, then back to top
for (let i = 0; i < 10; i++) {
  await page.evaluate(() => window.scrollBy(0, 500));
  await new Promise(r => setTimeout(r, 300));
}
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 1000));

await page.screenshot({ path: join(dir, filename), fullPage: false });
console.log(`Screenshot saved: ${join(dir, filename)}`);

// Also take a full page screenshot
const fullFilename = label
  ? `screenshot-${nextNum}-${label}-full.png`
  : `screenshot-${nextNum}-full.png`;
await page.screenshot({ path: join(dir, fullFilename), fullPage: true });
console.log(`Full screenshot saved: ${join(dir, fullFilename)}`);

await browser.close();
