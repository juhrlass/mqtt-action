# mqtt-action
Publish a MQTT message from GitHub Actions.

## Usage

For example:

```yaml
- name: Publish commit hash to mqtt broker
  uses: juhrlass/mqtt-action@master
  with:
    protocol: mqtt
    host: broker.example.com
    port: 1883
    topic: "mqtt-action/test"
    message: ${{ github.sha }}
    username: 'mqtt'
    password: ${{ secrets.MQTT_BROKER_PASSWORD }}
```

Uses [mqtt.js](https://github.com/mqttjs/MQTT.js)

Params map to mqtt.js options:
See: [client-options.d.ts](https://github.com/mqttjs/MQTT.js/blob/master/types/lib/client-options.d.ts)

