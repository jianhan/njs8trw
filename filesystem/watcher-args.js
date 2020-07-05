'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-05 21:49:31
 * @LastEditTime: 2020-07-05 21:51:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/filesystem/watcher-args.js
 */
const fs = require('fs')
const filename = process.argv[2]
if (!filename) {
    throw Error('A file has to be specified')
}

fs.watch(filename, () => console.log(`file ${filename} has been changed`))
console.log(`start to watch ${filename}`)