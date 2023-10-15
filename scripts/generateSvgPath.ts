const fs = require('fs');
const path = require('path');

const svgDirectories = [path.join(__dirname, '../src/svg/')];

let allSvgFiles = [];
let allIconNames = [];

svgDirectories.forEach((svgDirectory) => {
  // Get all SVG files from the directory
  const svgFiles = fs.readdirSync(svgDirectory).filter((file) => path.extname(file) === '.svg');
  allSvgFiles = [...allSvgFiles, ...svgFiles.map((file) => path.join(path.basename(svgDirectory), file))];

  // Extract base names (without .svg extension) and convert them to PascalCase
  const iconNames = svgFiles.map((file) => {
    const baseName = path.basename(file, '.svg');
    return baseName;
  });
  allIconNames = [...allIconNames, ...iconNames];
});

const react = `import { FunctionComponent, SVGProps } from 'react';\n`;

// Generate imports
const imports = allIconNames.map((name, index) => `import ${name} from './${allSvgFiles[index]}';`).join('\n');

// Generate IconType
const iconType = `export type IconType = '${allIconNames.join("' | '")}';\n`;

// Generate IconType
const iconNames = `export const IconNames = ['${allIconNames.join("' , '")}'];\n`;

// Generate Images type
const imagesType = `
type Images = {
  [key in IconType]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};`;

// Generate images mapping
const imagesMapping = `
export const images: Images = {
    ${allIconNames.map((name) => `${name},`).join('\n    ')}
};`;

// Combine everything into one string
const content = [react, imports, iconType, iconNames, imagesType, imagesMapping].join('\n\n');

// Write to SvgPath.ts
fs.writeFileSync(path.join(__dirname, '../src/SvgPath.ts'), content);
