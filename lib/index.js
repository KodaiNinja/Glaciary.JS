#!/usr/bin/env node

const glaciary = require('./glaciary.js')
const cwd = process.cwd();
const args = process.argv;
let glaciaryDir = `${cwd}/.glaciary`;

if (glaciary.checkForGlaciaryFolder(glaciaryDir)) {
    console.clear();
    glaciary.run(glaciaryDir);
}

if(args[2] === "-test"){
    setTimeout(()=>{
        process.exit();
    }, 5000)
}

require('./server');
