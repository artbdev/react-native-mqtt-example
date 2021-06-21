import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import mqtt, { MqttClient } from 'mqtt/dist/mqtt';
import { Styles } from './assets/Styles';
import { PayloadProps } from './src/Interfaces';
import { initialPayloadData } from './PlaceholderData';
import Connection from './src/components/Connection';
import Subscribe from './src/components/Subscribe';
import Publish from './src/components/Publish';
import MessageCollection from './src/components/MessageCollection';
import { formatSendDateTime } from './src/utils';

const App = () => {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [messages, setMessages] = useState<PayloadProps[]>(initialPayloadData);
  const [connectionButtonLabel, setConnectionButtonLabel] = useState<string>("Connect");

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        setIsConnected(true);
        Alert.alert("Connected!");
        setConnectionButtonLabel("Disconnect");
      });
      client.on("error", (error: Error) => {
        console.error("Error: ", error.message);
      });
      client.on("message", (topic: string, message: string) => {
        const incomingPayload: PayloadProps = JSON.parse(message);
        const sendDateTime = formatSendDateTime();
        const messageReived: PayloadProps = { 
          topic: topic, 
          content: incomingPayload.content, 
          dateTimeSent: incomingPayload.dateTimeSent, 
          dateTimeReceived: sendDateTime
        };
        setMessages(messages => [...messages, messageReived]);
      });
    };
  }, [client]);

  const connectToBroker = (host: any, mqttOptions: any) => {
    if (!isConnected) {
      setConnectionButtonLabel("Connecting");
      setClient(mqtt.connect(host, mqttOptions));
    };
  };

  const disconnectFromBroker = () => {
    if (client) {
      client.end(() => {
        setIsConnected(false);
        Alert.alert("Disconnected!");
        setConnectionButtonLabel('Connect');
      });
    };
  };

  const publishMessageViaTopic = (topic: string, message: string) => {
    if (!topic) {
      Alert.alert("Please provide a topic.");
    };
    if (!message) {
      Alert.alert("Please provide a message.");
    }
    if (client && topic && message) {
      client.publish(topic, message, { qos: 0 }, (error: Error) => {
        if (error) {
          console.log(`Published to topic: ${topic}`);
        };
      });
    };
  };

  const clearMessages = () => {
    setMessages([]);
  }

  const subscribeToTopic = (topic: string) => {
    if (!topic) {
      Alert.alert("Please provide a topic.");
    };
    if (client && topic) {
      client.subscribe(topic, { qos: 0 }, (error: Error) => {
        if (!error) {
          Alert.alert(`Subscribed to topic: ${topic}`);
        };
      });
    };
  };

  const unSubscribeToTopic = (topic: string) => {
    if (!topic) {
      Alert.alert("Please provide a topic.");
    };
    if (client && topic) {
      client.unsubscribe(topic, (error: Error) => {
        if (!error) {
          Alert.alert(`Unsubscribed to topic: ${topic}`);
        } else {
          console.log('Unsubscribe error', error);
        }
      });
    };
  };

  return (
    <View style={Styles.appContainer}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>
          Mqtt with React Native
        </Text>
      </View>
      <View style={Styles.clientConnectComponent}>
        <Connection
          connect={connectToBroker}
          disconnect={disconnectFromBroker}
          connectionButtonLabel={connectionButtonLabel}
          isConnected={isConnected}
        />
      </View>
      <View style={Styles.clientSubscribeComponent}>
        <Subscribe
          subscribe={subscribeToTopic}
          unsubscribe={unSubscribeToTopic}
        />
      </View>
      <View style={Styles.clientPublishComponent}>
        <Publish
          publish={publishMessageViaTopic}
          clearMessages={clearMessages}
        />
      </View>
      <View style={Styles.messagesContainer}>
        <MessageCollection
          messages={messages}
          clearMessages={clearMessages}
        />
      </View>
    </View>
  );
};

export default App;