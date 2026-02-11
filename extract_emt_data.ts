import fs from 'fs';

const htmlEn = fs.readFileSync('legacy/index_emt_backup.html', 'utf-8');
const htmlKo = fs.readFileSync('legacy/ko/index.html', 'utf-8');

function extractProductData(html) {
    const match = html.match(/const productData = ({[\s\S]*?});/);
    if (!match) return null;
    return match[1];
}

console.log('--- EN PRODUCTS ---');
console.log(extractProductData(htmlEn));

console.log('\n\n--- KO PRODUCTS ---');
console.log(extractProductData(htmlKo));
