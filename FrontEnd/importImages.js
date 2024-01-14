import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Function to get the directory name of the current module file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function generateImageImports() {
    const imagesDirectory = path.join(__dirname, './public/londonmaps');
    const outputFilePath = path.join(__dirname, './generatedImports.js');

    let importStatements = '';
    fs.readdirSync(imagesDirectory).forEach(file => {
        const extension = path.extname(file);
        if (['.png', '.jpg', '.jpeg', '.gif'].includes(extension)) {
            const fileName = path.basename(file, extension).replace(/[\W_]+/g, "");
            importStatements += `import ${fileName} from './public/londonmaps/${file}';\n`;
        }
    });

    fs.writeFileSync(outputFilePath, importStatements);
}

generateImageImports();
