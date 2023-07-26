import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

export default {
	input: 'diagram.js',
	output:
		{
			file: 'docs/diagram.min.js',
			format: 'umd',
			// plugins: [terser()],
		},
	plugins: [
		resolve(),
		//Needed for Tippy.js
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	]
}
