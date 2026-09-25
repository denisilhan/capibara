import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resources } from '../src/data/index';
import { collections } from '../src/data/collections';
import { resourcePath } from '../src/lib/links';
const base = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:3000';
test('all local routes render and unknown slugs return 404',async()=>{
 const paths=['/','/apis','/bots','/tools','/weird','/collections','/random','/search?q=weather',...resources.map(resourcePath),...collections.map(c=>`/collections/${c.slug}`)];
 for(const path of paths){const response=await fetch(new URL(path,base));assert.equal(response.status,200,path);const html=await response.text();assert.ok(html.includes('capybara'),path);assert.ok(!html.includes('Application error'),path);}
 for(const path of ['/apis/not-a-service','/bots/not-a-bot','/tools/not-a-tool','/weird/not-a-site','/collections/not-a-collection']){const response=await fetch(new URL(path,base));assert.equal(response.status,404,path);}
});
test('only the reviewed Sapphire invite is rendered; all external CTAs use safe new tabs',async()=>{
 const html=await (await fetch(`${base}/bots`)).text();
 assert.ok(html.includes('https://sapph.xyz/invite'));assert.ok(!html.includes('href="https://invite.poketwo.net/"'));
 const anchors=[...html.matchAll(/<a\b([^>]*href="https:\/\/[^>]+)>/g)];assert.ok(anchors.length>0);
 for(const [,attributes] of anchors){assert.ok(attributes.includes('target="_blank"'));assert.ok(attributes.includes('rel="noopener noreferrer"'));}
 const poketwo=await (await fetch(`${base}/bots/poketwo`)).text();
 assert.ok(!poketwo.includes('>add to discord'));
});
