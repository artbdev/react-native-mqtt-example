import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Connection from './src/components/Connection';
import mqtt, { MqttClient } from 'mqtt/dist/mqtt';
import Publish from './src/components/Publish';
import { Styles } from './assets/Styles';
import Subscribe from './src/components/Subscribe';

const App = () => {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>("Connect");
  const [isSubscribed, setIsSubscribed] = useState<string>("Subscribe");
  
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
    };
  };

  const mqttSubscribe = (topic: string) => {
    if (client) {
      client.subscribe(topic);
    };
  };

  const mqttUnSubscribe = (topic: string) => {
    if (client) {
      client.unsubscribe(topic, (error: Error) => {
        if (error) {
          console.log('Unsubscribe error', error);
        }
        setIsSubscribed("Unsubscribe");
      });
    };
  };

  return (
    <View style={Styles.appContainer}>
      <Connection connect={mqttConnect} disconnect={mqttDisconnect} connectionButtonLable={connectionStatus} />
      <Publish publish={mqttPublish} />
      <Subscribe subscribe={mqttSubscribe} unsubscribe={mqttUnSubscribe} showIsSubscribed={isSubscribed} />
    </View>
  );
}

export default App;