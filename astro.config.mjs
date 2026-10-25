// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages（プロジェクトサイト）として公開するための設定
	site: 'https://katzkawai.org',
	base: '/kklab-astro-blog',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Zen Maru Gothic',
			cssVariable: '--font-body',
			weights: [400, 700],
			styles: ['normal'],
			subsets: ['japanese', 'latin'],
			fallbacks: ['sans-serif'],
		},
	],
});
