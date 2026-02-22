import { dirname } from "path";
import { fileURLToPath } from "url";

import pkg from "@eslint/eslintrc";

const { FlatCompat } = pkg
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
