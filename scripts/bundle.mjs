import * as esbuild from 'esbuild';
import * as fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const copyFileSync = (source, dest) => {
  const content = fs.readFileSync(source, 'utf-8');
  fs.writeFileSync(dest, content);
};

copyFileSync('README.md', 'dist/README.md');
copyFileSync('LICENSE.md', 'dist/LICENSE.md');

//const license = fs.readFileSync('LICENSE.md', 'utf8');
const banner = {
  js: `// glMatrix - v${pkg.version}`
}

// ES Modules build
esbuild.build({
  logLevel: 'info',
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  banner,
  format: 'esm',
  outfile: 'dist/esm/gl-matrix.js',
}).catch(() => process.exit(1));

// Common JS Build
esbuild.build({
  logLevel: 'info',
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  banner,
  format: 'cjs',
  outfile: 'dist/cjs/gl-matrix.js',
}).catch(() => process.exit(1));