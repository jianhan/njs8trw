'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-05 21:54:52
 * @LastEditTime: 2020-07-06 21:36:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/filesystem/watcher-spawn.js
 */
const fs = require('fs')
const spawn = require('child_process').spawn
const filename = process.argv[2]

if (!filename) {
    throw Error('A file to watch must be specified!');
}

fs.watch(filename, () => {
    const ls = spawn('ls', ['-l', '-h', filename]);
    let output = '';
    ls.stdout.on('data', chunk => output += chunk);
    ls.on('close', () => {
        const parts = output.split(/\s+/);
        console.log([parts[0], parts[4], parts[8]]);
    });
})

console.log(`Now watching ${filename} for changes...`);
