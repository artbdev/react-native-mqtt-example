import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Connection from './src/components/Connection';
import mqtt, { MqttClient } from 'mqtt/dist/mqtt';

const App = () => {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>("Connect");

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        setConnectionStatus("Connected");
      });
      client.on("err", (err: Error) => {
        console.error("Connection error: ", err);
      });
      client.on("disconnect", () => {
        console.log("disconnected");
      });
    }
  }, [client]);

  const mqttConnect = (host: any, mqttOptions: any) => {
    setConnectionStatus("Connecting");
    setClient(mqtt.connect(host, mqttOptions));
  };

  
  const mqttDisconnect = () => {
    if (client) {
      client.end(() => {
        setConnectionStatus('Connect');
      });
    }
  }
  
  return (
    <View style={styles.container}>
      <Connection connect={mqttConnect} disconnect={mqttDisconnect} connectionButtonLable={connectionStatus} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5
  }
});

export default App;