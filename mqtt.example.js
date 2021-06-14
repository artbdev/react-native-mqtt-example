// const util = require('util');
// var mqtt = require('mqtt');
// const { MqttClient } = require('mqtt');
// // var client  = mqtt.connect("ws://70.35.204.233:8888", {clientId: "mr client"});
// //  const clientOnMessage = client.on;
// // const client = util.promisify(mqtt.connect);
// // const on = util.promisify(clientOn);

// // const client = new MqttClient;
// // client.connect("ws://70.35.204.233:8888", {clientId: "mr client"});

// const clientConnect = util.promisify(mqtt.connect);
// // const subscribe = util.promisify(client.subscribe);
// // const pub"ws://70.35.204.233:8888", {clientId: "mr lish = util.promisify(client.publish);

// const client = clientConnect(client"});
// client.then(client => client.subscribe("presence"));
// client.subscribe("presence");
// // on("message")
// //     .then((message) => conosle.log(message.toString()))
// //     .catch(err => console.error(err));
// // on("message").then((topic, message) => console.log(message.toString()));
// // client.subscribe("presence");
// // client.publish("presence", "hello");
// // client.on("message", (topic, message) => console.log(message.toString()));
// // const subscribeToTopic = async (topic, options) => {
// //     await subscribe(topic, options);
// // };
// // const publishToTopic = async (topic ,message, options) => {
// //     publish(topic, message, options);
// // };
// // subscribeToTopic("hello", {qos:0});
// // subscribeToTopic("presence").catch(err => { console.log(err)});
// // publishToTopic("presence", "hello mqtt", {qos: 0}).catch(err => { console.log(err)});
// // client.on('connect', function () {
// //   client.subscribe('presence', function (err) {
// //     if (!err) {
// //       client.publish('presence', 'Hello mqtt')
// //     }
// //   })
// // })
// // client.on('message', function (topic, message) {
// //   // message is Buffer
// //   console.log(message.toString())
// //   client.end()
// // });