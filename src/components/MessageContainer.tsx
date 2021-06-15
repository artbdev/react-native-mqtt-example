import React from 'react';
import { Dimensions ,View, Text, ScrollView } from 'react-native';
import {MessageContainerProps } from '../../Interfaces';

const MessageContainer: React.FC<MessageContainerProps> = (props: MessageContainerProps) => {

    return (
        <View>
            <View>
                <Text>Messages</Text>
            </View>
            <ScrollView style={{ maxHeight: Dimensions.get("window").height * .15, minHeight: Dimensions.get("window").height * .15, backgroundColor: 'red', width: 200}}>
                {
                    props.messages.map((message,index) => {
                        return <View key={index}>
                            <Text>Topic: {message.topic}, Content: {message.content}</Text>
                        </View>;
                    })
                }
            </ScrollView>
        </View>
    );
};

export default MessageContainer;
