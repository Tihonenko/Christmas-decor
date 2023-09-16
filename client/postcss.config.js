// module.exports = {
//   plugins: {
//     tailwindcss: {
//       config: path.join(__dirname, 'tailwind.config.js'),
//     },
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

import tailwind from 'tailwindcss';
import tailwindConfig from './tailwind.config.cjs';
import autoprefixer from 'autoprefixer';

module.exports = {
  plugins: [tailwind({config: tailwindConfig}), autoprefixer]
};