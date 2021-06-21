import React from 'react';
import { View, Text, Pressable } from 'react-native'
import { Styles } from '../../assets/Styles';
import { ConnectionProps } from '../Interfaces';

const url = "ws://broker.emqx.io:8083/mqtt";

const Connection: React.FC<ConnectionProps> = (props: ConnectionProps) => {

    const handleConnect = () => {
        props.connect(url, { clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}` });
    };

    const handleDisconnect = () => {
        props.disconnect();
    };

    return (
        <View style={Styles.mqttActionComponentContainer}>
            <View style={Styles.mqttActionComponentElement}>
                <Pressable
                    onPress={!props.isConnected ? handleConnect : handleDisconnect}
                    style={Styles.button}
                >
                    <Text style={Styles.buttonText}>{props.connectionButtonLabel}</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Connection;
