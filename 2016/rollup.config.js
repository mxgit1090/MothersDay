import copy from 'rollup-plugin-copy';
import pug from 'rollup-plugin-pug';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { terser }  from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;
const dirname = 'dist';

export default {
  input: 'src/index.js',
  output: {
    file: `${dirname}/bundle.js`,
    format: 'iife',
    sourcemap: 'inline',
  },
  plugins: [
    pug({
      include: [
        'src/views/*.pug',
        'src/views/**/*.pug',
      ],
    }),
    // @todo: find or create an appropriate rollup-plugin for Stylus
    copy({
      targets: [
        {
          src: 'src/index.html',
          dest: dirname
        }
      ]
    }),
    ...(production
      ? [
        terser()
      ]
      : [
        serve(dirname),
        livereload(dirname)
      ]
    )
  ],
}
