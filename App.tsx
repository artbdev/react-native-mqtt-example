import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Connection from './src/components/Connection';
import mqtt, { MqttClient } from 'mqtt/dist/mqtt';
import Publish from './src/components/Publish';
import { Styles } from './assets/Styles';

const App = () => {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>("Connect");

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        setConnectionStatus("Connected");
      });
      client.on("error", (error: Error) => {
        console.error("Something went wrong ", error);
      });
    };
  }, [client]);

  const mqttConnect = (host: any, mqttOptions: any) => {
    setConnectionStatus("Connecting");
    setClient(mqtt.connect(host, mqttOptions));
  };

  const mqttDisconnect = () => {
    if (client) {
      client.end(() => {
        setConnectionStatus('Connect');
        console.log("Good buy");
      });
    };
  };

  const mqttPublish = (topic: string, message: string) => {
    if (client) {
      client.publish(topic, message);
    }
  }
  return (
    <View style={Styles.appContainer}>
      <Connection connect={mqttConnect} disconnect={mqttDisconnect} connectionButtonLable={connectionStatus} />
      <Publish publish={mqttPublish} />
    </View>
  );
}

export default App;