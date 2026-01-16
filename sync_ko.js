const fs = require('fs');

const srcPath = 'd:\\코딩\\EMT\\ko\\index.html';
const destEmtKorea = 'd:\\코딩\\EMT\\emt-korea\\EMT.html';
const destGlobalKo = 'd:\\코딩\\EMT\\emt-global\\ko\\index.html';

try {
    const content = fs.readFileSync(srcPath, 'utf8');
    fs.writeFileSync(destEmtKorea, content, 'utf8');
    const contentGlobal = content.replace(/\.\.\/assets\//g, '../../assets/');
    fs.writeFileSync(destGlobalKo, contentGlobal, 'utf8');
    console.log('Done');
} catch (e) {
    console.error(e);
}
