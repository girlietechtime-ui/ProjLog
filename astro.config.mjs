// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'JetBrainsMono',
			cssVariable: '--font-JetBrainsMono',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/JetBrainsMono-Regular.woff2'],
						weight: 400,
						style: 'normal',
						
					},
					{
						src: ['./src/assets/fonts/JetBrainsMono-Bold.woff2'],
						weight: 700,
						style: 'normal',
						
					},
				],
			},
		},
	],
});
