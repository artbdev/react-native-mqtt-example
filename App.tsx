import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import mqtt, { MqttClient } from 'mqtt/dist/mqtt';
import { Styles } from './assets/Styles';
import { PayloadProps } from './Interfaces';
import { initialPayloadData } from './PlaceholderData';
import Connection from './src/components/Connection';
import Subscribe from './src/components/Subscribe';
import Publish from './src/components/Publish';
import MessageContainer from './src/components/MessageContainer';

const App = () => {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>("Connect");
  const [isSubscribed, setIsSubscribed] = useState<string>("Subscribe");
  const [messages, setMessages] = useState<PayloadProps[]>(initialPayloadData);
  
  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        setConnectionStatus("Connected");
      });
      client.on("error", (error: Error) => {
        console.error("Something went wrong ", error);
      });
      client.on("message", (topic: string, message: string) => {
        const incomingPayload: PayloadProps = { topic: topic, content: message.toString() };
        setMessages(messages => [...messages,incomingPayload]);
        console.log(messages);
      });
    };
  }, [client]);

  const connectToBroker = (host: any, mqttOptions: any) => {
    setConnectionStatus("Connecting");
    setClient(mqtt.connect(host, mqttOptions));
  };

  const disconnectFromBroker = () => {
    if (client) {
      client.end(() => {
        setConnectionStatus('Connect');
        console.log("Good buy");
      });
    };
  };

  const publishMessageViaTopic = (topic: string, message: string) => {
    if (client) {
      client.publish(topic, message);
    };
  };

  const subscribeToTopic = (topic: string) => {
    if (client) {
      client.subscribe(topic);
    };
  };

  const unSubscribeToTopic = (topic: string) => {
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
      <Connection connect={connectToBroker} disconnect={disconnectFromBroker} connectionButtonLable={connectionStatus} />
      <Subscribe subscribe={subscribeToTopic} unsubscribe={unSubscribeToTopic} showIsSubscribed={isSubscribed} />
      <Publish publish={publishMessageViaTopic} />
      <MessageContainer messages={messages} />
    </View>
  );
}

export default App;