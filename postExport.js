const fs = require('fs');
const path = require('path');

const exportDir = path.join(__dirname, 'out');

function updateAssetPaths(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      updateAssetPaths(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      content = content.replace(/src="\/_next/g, 'src="_next');
      content = content.replace(/href="\/_next/g, 'href="_next');
      content = content.replace(/src="\/taggedImages\//g, 'src="taggedImages/'); // it will fix images paths
      content = content.replace(/href="\/taggedImages\//g, 'href="taggedImages/'); // this too
      fs.writeFileSync(fullPath, content, 'utf-8');
    } 
  }
}

updateAssetPaths(exportDir);
console.log('Asset paths updated successfully.');
