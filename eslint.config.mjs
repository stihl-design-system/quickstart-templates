import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...nextVitals,
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**'],
  },
]);