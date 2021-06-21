import React, { useRef } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Styles } from '../../assets/Styles';
import { MessageCollectionContainerProps } from '../Interfaces';

const MessageCollection: React.FC<MessageCollectionContainerProps> = (props: MessageCollectionContainerProps) => {

    const scrollViewRef = useRef(null);

    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <Text style={Styles.messageContainerHeaderText}>
                    Messages
                </Text>
            </View>
            <ScrollView
                style={Styles.messageCollectionContainer}
                ref={scrollViewRef}
                onContentSizeChange={
                    () => scrollViewRef.current.scrollToEnd({ animated: true })
                }
            >
                {
                    props.messages.map((message, index) => {
                        return <View
                            style={Styles.messageRowContainer}
                            key={index}
                        >
                            <Text style={Styles.messageTopicLabel}>
                                Topic: {message.topic}
                            </Text>
                            <Text style={Styles.messageContainerText}>
                                {message.content}
                            </Text>
                            <Text style={Styles.messageReceiveDateTime}>
                                {message.dateTimeReceived}
                            </Text>
                        </View>
                    })
                }
            </ScrollView>
            <Pressable
                style={[Styles.messagesClearButton]}
                onPress={
                    () => {
                        props.clearMessages();
                    }
                }
            >
                <Text style={Styles.buttonText}>
                    Clear Messages
                </Text>
            </Pressable>
        </View>
    );
};

export default MessageCollection;
