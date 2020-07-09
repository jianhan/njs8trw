'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-09 18:42:34
 * @LastEditTime: 2020-07-09 20:11:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/networking/net-watcher.js
 */
const fs = require('fs')
const net = require('net')
const filename = process.argv[2]

if (!filename) {
    throw Error('Error: No filename specified.');
}

net.createServer(connection => {
    console.log("Subscriber started")
    connection.write(`Now watching "${filename}" for change`)

    const watcher = fs.watch(filename, d => connection.write(`file has been changed ${d} at ${new Date()}`))

    connection.on("close", () => {
        console.log("connection closed")
        watcher.close()
    })
}).listen(60300, () => console.log(`Listening on 60300...`))