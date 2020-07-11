'use strict'
/*
 * @Author: your name
 * @Date: 2020-07-11 23:27:53
 * @LastEditTime: 2020-07-11 23:45:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /njs8trw/microservices/zmq-watcher-req.js
 */

const zmq = require("zeromq")


async function run() {
    const req = new zmq.Request
    const filename = process.argv[2]

    req.connect("tcp://127.0.0.1:3000")
    console.log("Producer bound to port 3000")

    console.log(`Sending a request for ${filename}`);
    await req.send(JSON.stringify({ path: filename }));

    const [result] = await req.receive()
    console.log(JSON.parse(result))

}

run()