/* eslint-disable @typescript-eslint/no-var-requires */
const symlinkDir = require('symlink-dir');
const fs = require('node:fs');

if (process.env.CI) {
  console.log('Copying the material icons & symbols');
  fs.cpSync('../node_modules/@material-design-icons/svg/.', '../public/assets/material-icons', {
    recursive: true,
  });
} else {
  console.log('Symlinking the material icons & symbols');
  symlinkDir('../node_modules/@material-design-icons/svg/.', '../public/assets/material-icons');
}
