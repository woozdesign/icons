const fs = require('fs');
const path = require('path');

// Convert string to PascalCase
const toPascalCase = (str) => {
  return str
    .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    })
    .replace(/[-_](.)/g, function (match, group1) {
      return group1.toUpperCase();
    });
};

// Path to the SVG directory
const svgDirectory = path.join(__dirname, '../src/svg');

// Get all SVG files from the directory
const svgFiles = fs.readdirSync(svgDirectory).filter((file) => path.extname(file) === '.svg');

// Extract base names (without .svg extension) and convert them to PascalCase
const iconNames = svgFiles.map((file) => {
  const baseName = path.basename(file, '.svg');
  return toPascalCase(baseName);
});

const react = `import { FunctionComponent, SVGProps } from 'react';\n`;

// Generate imports
const imports = iconNames.map((name, index) => `import ${name} from './svg/${svgFiles[index]}';`).join('\n');

// Generate IconType
const iconType = `export type IconType = '${iconNames.join("' | '")}';`;

// Generate Images type
const imagesType = `
type Images = {
  [key in IconType]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};`;

// Generate images mapping
const imagesMapping = `
export const images: Images = {
    ${iconNames.map((name) => `${name},`).join('\n    ')}
};`;

// Combine everything into one string
const content = [react, imports, iconType, imagesType, imagesMapping].join('\n\n');

// Write to SvgPath.ts
fs.writeFileSync(path.join(__dirname, '../src/SvgPath.ts'), content);
