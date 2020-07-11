'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-11 23:29:46
 * @LastEditTime: 2020-07-11 23:48:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/microservices/zmq-watcher-rep.js
 */

const zmq = require('zeromq')
const fs = require('fs')

async function run() {
    const reply = new zmq.Reply
    await reply.bind('tcp://127.0.0.1:3000')
    for await (const [data] of reply) {
        const d = JSON.parse(data)
        fs.readFile(d.path, async (err, content) => {
            console.log('sending file content...')
            await reply.send(JSON.stringify({
                filename: d.path,
                content: content,
                pid: process.pid
            }))
        })
    }

    // Close the responder when the Node process ends.
    process.on('SIGINT', () => {
        console.log('Shutting down...');
        reply.close()
    });
}

run()