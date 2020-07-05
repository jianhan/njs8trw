/*
 * @Author: your name
 * @Date: 2020-07-05 21:41:34
 * @LastEditTime: 2020-07-05 21:45:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/filesystem/watcher.js
 */
'use strict'

/**
 * a feature introduced in ECMAScript version 5. Strict mode disables certain problematic JavaScript language features 
 * and makes others throw exceptions. It’s always a good idea to use strict mode
 */

/**
 * The output of require() is usually a plain old JavaScript object, but may also be a function. 
 */
const fs = require('fs')

/**arrow function do not create a new scope for this.  */
fs.watch('target.txt', () => console.log('file changed'))

console.log('Now watching target.txt for changes...');