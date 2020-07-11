'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-11 22:45:58
 * @LastEditTime: 2020-07-11 23:23:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/microservices/zmq-watcher-pub.js
 */

const fs = require('fs')
const zmq = require('zeromq')
const filename = process.argv[2]

function run() {

    const publisher = new zmq.Publisher
    // publisher.bind('tcp://*:60400') to tell ØMQ to listen on TCP port 60400 for subscribers. 
    publisher.bind('tcp://127.0.0.1:3000')
    fs.watch(filename, async () => {
        console.log('file changed')
        await publisher.send(JSON.stringify({
            type: 'changed',
            file: filename,
            timestamp: Date.now()
        }))
    })
}
try {
    run()
} catch (e) {
    console.log(e)
}