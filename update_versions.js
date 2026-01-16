const fs = require('fs');
const path = require('path');

const srcPath = 'd:\\코딩\\EMT\\ko\\index.html';
const destEmtKorea = 'd:\\코딩\\EMT\\emt-korea\\EMT.html';
const destRoot = 'd:\\코딩\\EMT\\EMT.html';
const destGlobalKo = 'd:\\코딩\\EMT\\emt-global\\ko\\index.html';

try {
    const content = fs.readFileSync(srcPath, 'utf8');

    // 1. emt-korea
    fs.writeFileSync(destEmtKorea, content, 'utf8');
    console.log('Updated emt-korea');

    // 2. root
    const contentRoot = content.replace(/\.\.\/assets\//g, 'assets/');
    fs.writeFileSync(destRoot, contentRoot, 'utf8');
    console.log('Updated root');

    // 3. global ko
    const contentGlobal = content.replace(/\.\.\/assets\//g, '../../assets/');
    fs.writeFileSync(destGlobalKo, contentGlobal, 'utf8');
    console.log('Updated global ko');
    
} catch (e) {
    console.error(e);
}
