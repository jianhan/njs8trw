'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-09 20:32:09
 * @LastEditTime: 2020-07-09 20:55:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/networking/net-watcher-json-client.js
 */
const net = require('net')

const client = net.connect(60300, 'localhost')

client.on('error', err => console.log(err))

client.on("data", data => {
    const message = JSON.parse(data.toString())
    if (message.type === 'watching') {
        console.log(`Now watching: ${message.file}`);
    } else if (message.type === 'changed') {
        const date = new Date(message.timestamp);
        console.log(`File changed: ${date}`);
    } else {
        console.log(`Unrecognized message type: ${message.type}`);
    }
})