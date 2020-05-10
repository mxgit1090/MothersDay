import copy from 'rollup-plugin-copy';
import pug from 'rollup-plugin-pug';
import scss from 'rollup-plugin-scss';
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
        scss({
            output: `${dirname}/bundle.css`,
            ...(production && {
              outputStyle: 'compressed'
            })
        }),
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
