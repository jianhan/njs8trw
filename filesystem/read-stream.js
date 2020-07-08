'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-08 20:13:25
 * @LastEditTime: 2020-07-08 20:13:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/filesystem/read-stream.js
 */
require('fs').createReadStream(process.argv[2])
    .on('data', chunk => process.stdout.write(chunk))
    .on('error', err => process.stderr.write(`ERROR: ${err.message}\n`));