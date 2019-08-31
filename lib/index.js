#!/usr/bin/env node

const glaciary = require('./glaciary.js')
const cwd = process.cwd();
let glaciaryDir = `${cwd}/.glaciary`;

if (glaciary.checkForGlaciaryFolder(glaciaryDir)) {
    console.clear();
    glaciary.run(glaciaryDir);
}

require('./server');
