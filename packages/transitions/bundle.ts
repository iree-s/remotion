import {build, revision} from 'bun';
import path from 'path';

if (process.env.NODE_ENV !== 'production') {
	throw new Error('This script must be run using NODE_ENV=production');
}

if (!revision.startsWith('07ce')) {
	// eslint-disable-next-line no-console
	console.warn('warn: Remotion currently uses a fork of Bun to bundle.');
	// eslint-disable-next-line no-console
	console.log(
		'You dont currently run the fork, this could lead to duplicate key warnings in React.',
	);
}

const presentations = ['slide', 'flip', 'wipe', 'fade', 'clock-wipe'];

const output = await build({
	entrypoints: [
		'src/index.ts',
		...presentations.map((p) => `src/presentations/${p}.tsx`),
	],
	external: [
		'remotion',
		'remotion/no-react',
		'react',
		'react/jsx-runtime',
		'react/jsx-runtime',
		'react/jsx-dev-runtime',
		'@remotion/paths',
		'@remotion/shapes',
	],
	naming: '[name].mjs',
});

for (const file of output.outputs) {
	const str = await file.text();
	const newStr = str;

	Bun.write(path.join('dist', 'esm', file.path), newStr);
}