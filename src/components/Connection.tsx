import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { styles } from '../../assets/Styles';

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
            <Text>Connection Component</Text>
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

const Styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 5
    }
})
