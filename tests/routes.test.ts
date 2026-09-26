import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resources } from '../src/data/index';
import { collections } from '../src/data/collections';
import { resourcePath } from '../src/lib/links';
const base = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:3000';
test('all local routes render and unknown slugs return 404',async()=>{
 const paths=['/','/apis','/bots','/tools','/extensions','/weird','/collections','/random','/saved','/web','/web?section=games','/web?section=useful','/web?section=weird','/extensions','/search?q=weather',...resources.map(resourcePath),...collections.map(c=>`/collections/${c.slug}`)];
 for(const path of paths){const response=await fetch(new URL(path,base));assert.equal(response.status,200,path);const html=await response.text();assert.ok(html.includes('capibara home'),path);assert.ok(!html.includes('Application error'),path);}
 for(const path of ['/apis/not-a-service','/bots/not-a-bot','/tools/not-a-tool','/weird/not-a-site','/web/not-a-site','/collections/not-a-collection']){const response=await fetch(new URL(path,base));assert.equal(response.status,404,path);}
});
test('reviewed invites render and unverified invites stay hidden; external CTAs use safe new tabs',async()=>{
 const html=await (await fetch(`${base}/bots`)).text();
 assert.ok(html.includes('https://sapph.xyz/invite'));assert.ok(!html.includes('href="https://invite.poketwo.net/"'));
 const anchors=[...html.matchAll(/<a\b([^>]*href="https:\/\/[^>]+)>/g)];assert.ok(anchors.length>0);
 for(const [,attributes] of anchors){assert.ok(attributes.includes('target="_blank"'));assert.ok(attributes.includes('rel="noopener noreferrer"'));}
 const poketwo=await (await fetch(`${base}/bots/poketwo`)).text();
 assert.ok(!poketwo.includes('>add to discord'));
});

test('extension navigation, list partition, and existing detail links remain consistent', async () => {
 const extensions = await (await fetch(`${base}/extensions`)).text();
 assert.ok(extensions.includes('href="/tools/shazam"'));
 assert.ok(extensions.includes('href="/tools/sider"'));
 assert.ok(!extensions.includes('href="/tools/bruno"'));
 const tools = await (await fetch(`${base}/tools`)).text();
 assert.ok(tools.includes('href="/tools/gemini-in-chrome"'));
 assert.ok(!tools.includes('href="/tools/shazam"'));
 const detail = await (await fetch(`${base}/tools/shazam`)).text();
 assert.ok(detail.includes('href="/extensions"'));
 assert.ok(detail.includes('browser extension'));
});

test('brand and weirdness indicators render in the directory and detail', async () => {
 for (const path of ['/weird', '/weird/pointer-pointer']) {
  const html = await (await fetch(base + path)).text();
  assert.ok(html.includes('brand-animal'));
  assert.ok(html.includes('weirdness: 2 of 3. capibara editorial assessment.'));
 }
 const icon = await fetch(base + '/icon.svg');
 assert.equal(icon.status, 200);
});


test('balanced discovery, factual details and browser query render', async () => {
 const home = await (await fetch(base + '/')).text();
 for (const path of ['/apis/open-meteo', '/bots/sapphire', '/tools/bitwarden', '/tools/httpie', '/weird/pointer-pointer'])
  assert.ok(home.includes('href="' + path + '"'), path);
 for (const path of ['/apis/github', '/bots/sapphire']) {
  const html = await (await fetch(base + path)).text();
  assert.ok(html.includes('resource-basics'));
  assert.ok(!html.includes('usefulness¹'));
  assert.ok(!html.includes('beginner score¹'));
 }
 const html = await (await fetch(base + '/extensions?platform=firefox')).text();
 assert.ok(html.includes('href="/tools/bitwarden"'));
 assert.ok(!html.includes('href="/tools/shazam"'));
});


test('collections share unwrapped extension filters and labeled API columns; weirdness query applies', async () => {
 const extensions = await (await fetch(base + '/collections/browser-extensions?platform=firefox&q=bitwarden')).text();
 assert.ok(!extensions.includes('class="panel directory"'));
 assert.ok(extensions.includes('href="/tools/bitwarden"'));
 assert.ok(!extensions.includes('href="/tools/shazam"'));
 const apis = await (await fetch(base + '/collections/free-no-auth')).text();
 assert.ok(apis.includes('service / what it does'));
 for (const path of ['/weird', '/collections/weird-web-rabbit-hole']) {
  const html = await (await fetch(base + path + '?sort=weirdness-desc')).text();
  assert.ok(html.indexOf('href="/weird/babel-image-archives"') < html.indexOf('href="/weird/chrome-music-lab"'));
  assert.ok(html.includes('weirdness: highest first'));
 }
});

test('web sections keep game filters and extension rows separate', async () => {
 const games = await (await fetch(base + '/web?section=games&players=solo&category=geography')).text();
 assert.ok(games.includes('href="/web/timeguessr"'));
 assert.ok(!games.includes('href="/web/haxball"'));
 assert.ok(!games.includes('href="/tools/shazam"'));
 const extensions = await (await fetch(base + '/extensions')).text();
 assert.ok(extensions.includes('href="/tools/shazam"'));
 assert.ok(!extensions.includes('href="/web/timeguessr"'));
 const detail = await (await fetch(base + '/web/timeguessr')).text();
 assert.ok(detail.includes('href="/web?section=games"'));
 assert.ok(detail.includes('>players<'));
 assert.ok(!detail.includes('weirdness-detail'));
});


test('extensions are outside web and unknown pricing is absent from visible detail markup', async () => {
 const web = await (await fetch(base + '/web?section=all')).text();
 assert.ok(!web.includes('href="/tools/shazam"'));
 const legacy = await fetch(base + '/web?section=extensions', { redirect: 'manual' });
 assert.equal(legacy.status, 307);
 assert.equal(legacy.headers.get('location'), '/extensions');
 for (const path of ['/apis/gbif', '/bots/jockie-music', '/weird/pointer-pointer', '/web/photopea']) {
  const html = (await (await fetch(base + path)).text()).split('<script')[0];
  assert.ok(!html.includes('<dt>pricing</dt>'), path);
  assert.ok(!html.includes('<h2>pricing</h2>'), path);
  assert.ok(!html.includes('not listed'), path);
 }
 const known = await (await fetch(base + '/apis/frankfurter')).text();
 assert.ok(known.includes('<dt>pricing</dt>'));
});
