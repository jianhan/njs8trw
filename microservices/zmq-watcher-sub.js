'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-11 22:53:27
 * @LastEditTime: 2020-07-11 23:24:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/microservices/zmq-watcher-sub.js
 */

// const zmq = require('zeromq')
// const subscriber = new zmq.Subscriber

// subscriber.subscribe('')
// // Connect to publisher.
// subscriber.connect("tcp://localhost:60400")


// subscriber.receive

const zmq = require("zeromq")

async function run() {
    const sock = new zmq.Subscriber

    sock.connect("tcp://127.0.0.1:3000")
    sock.subscribe("")
    console.log("Subscriber connected to port 3000")

    for await (const [data] of sock) {
        const message = JSON.parse(data);
        const date = new Date(message.timestamp);
        console.log(`File "${message.file}" changed at ${date}`);
    }
}

run()