import React from 'react';
import { View, Text, Pressable } from 'react-native'
import { Styles } from '../../assets/Styles';
import { ConnectionProps } from '../../Interfaces';

const Connection: React.FC<ConnectionProps> = (props: ConnectionProps) => {

    const url = "ws://70.35.204.233:8888";

    const handleConnect = () => {
        props.connect(url, { clientId: "new client" });
    };

    const handleDisconnect = () => {
        props.disconnect();
    };

    return (
        <View>
            <Pressable
                onPress={handleConnect}
                style={Styles.button}
            >
                <Text>{props.connectionButtonLable}</Text>
            </Pressable>
            <Pressable
                onPress={handleDisconnect}
                style={Styles.button}
            >
                <Text>Disconnect</Text>
            </Pressable>
        </View>
    );
};

export default Connection;
