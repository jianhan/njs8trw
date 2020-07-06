'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-05 21:54:52
 * @LastEditTime: 2020-07-06 21:28:46
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
    const ls = spawn('ls', ['-l', '-h', filename])
    ls.stdout.pipe(process.stdout)
})

console.log(`Now watching ${filename} for changes...`);