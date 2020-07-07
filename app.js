const mqtt = require('mqtt')
const core = require('@actions/core')

const client = mqtt.connect({
  protocol: core.getInput('protocol'),
  host: core.getInput('host'),
  port: core.getInput('port'),
  username: core.getInput('username'),
  password: core.getInput('password')
})

client.on('connect', function () {
  client.publish(core.getInput('topic'), core.getInput('message'), function (err) {
    if (!err) {
      console.log('Successfully published message to topic')
    } else {
      console.error('Could not publish message to topic')
    }
  })
  client.end()
})
