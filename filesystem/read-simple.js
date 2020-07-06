'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-06 21:40:24
 * @LastEditTime: 2020-07-06 21:41:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/filesystem/read-simple.js
 */
const fs = require('fs')
fs.readFile('target.txt', (err, data) => {
    if (err) {
        throw err
    }

    console.log(data, data.toString())
})