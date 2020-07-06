'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-06 21:42:18
 * @LastEditTime: 2020-07-06 21:43:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/filesystem/write-simple.js
 */
const fs = require('fs')
fs.writeFile('target.txt', 'Hello World', (err) => {
    if (err) {
        throw err;
    }
    console.log('file saved')
})