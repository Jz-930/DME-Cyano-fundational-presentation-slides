import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = [
    'f:/3-10-Nate-Presentation/image/001.jpg',
    'f:/3-10-Nate-Presentation/image/002.jpg',
    'f:/3-10-Nate-Presentation/image/003.jpg'
];

const outDir = 'f:/3-10-Nate-Presentation/presentation-web/public/images';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
    for (const file of files) {
        const name = path.basename(file, '.jpg');
        const outFile = path.join(outDir, `${name}.webp`);
        await sharp(file).webp().toFile(outFile);
        console.log(`Converted ${file} to ${outFile}`);
    }
}

run().catch(console.error);
