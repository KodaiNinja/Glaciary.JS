#!/usr/bin/env node

const fs = require('fs-extra');
const glaciary = require('./glaciary.js')
const cwd = process.cwd();
let glaciaryDir = `${cwd}\\.glaciary`;


glaciaryFolderExists();
glaciary.run(glaciaryDir);


// Check if .glaciary folder exists.
function glaciaryFolderExists() {
    if (fs.existsSync(glaciaryDir)) {
        if (fs.readdirSync(glaciaryDir).length === 0) {
            copyToGlaciary();
        } else {
            return true;
        }
    } else {
        createGlaciaryFolder();
    }
}


//  Create .glaciary folder if it does not exist.
function createGlaciaryFolder() {
    fs.mkdirSync(glaciaryDir);
    copyToGlaciary();
}


// Copy base files into .glaciary
function copyToGlaciary() {
    fs.copy(`${__dirname}\\.glaciary`, glaciaryDir, err => {
        if (err) return console.log(err);
    })
}