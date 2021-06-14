import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Styles } from '../../assets/Styles';

const Connection = ({ connect, disconnect, connectionButtonLable }) => {

    const url = "ws://70.35.204.233:8888";

    const handleConnect = () => {
        connect(url, { clientId: "new client" });
    };

    const handleDisconnect = () => {
        disconnect();
    };

    return (
        <View>
            <Pressable
                onPress={handleConnect}
                style={Styles.button}
            >
                <Text>{connectionButtonLable}</Text>
            </Pressable>
            <Pressable
                onPress={handleDisconnect}
                style={Styles.button}
            >
                <Text>Disconnect</Text>
            </Pressable>
        </View>
    )
}

export default Connection;
