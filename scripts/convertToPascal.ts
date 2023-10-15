const fs = require('fs');
const path = require('path');

const sourceDirectory = 'src/svg/feather_original/';
const destinationDirectory = 'src/svg/';

// Convert name from 'alert-circle' to 'AlertCircle'
const convertToPascalCase = (str) => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

fs.readdir(sourceDirectory, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  // Filter for SVG files
  const svgFiles = files.filter((file) => path.extname(file) === '.svg');

  svgFiles.forEach((file) => {
    const oldPath = path.join(sourceDirectory, file);
    const newFileName = convertToPascalCase(path.basename(file, '.svg')) + '.svg';
    const newPath = path.join(destinationDirectory, newFileName);

    fs.copyFile(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error duplicating ${file}:`, err);
        return;
      }
      console.log(`SVG duplicated to ${newPath}`);
    });
  });
});
