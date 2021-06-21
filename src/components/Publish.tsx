import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react';
import { Styles } from '../../assets/Styles';
import { PayloadProps, PublishProps } from '../Interfaces';
import { formatSendDateTime } from '../utils';

const Publish: React.FC<PublishProps> = (props: PublishProps) => {
    const [messageInput, setMessageInput] = useState<string>("");
    const [topicInput, setTopicInput] = useState<string>("");

    const handlePublishMessage = () => {
        const payloadToSend: PayloadProps = {
            content: messageInput,
            dateTimeSent: formatSendDateTime()
        };
        props.publish(topicInput, JSON.stringify(payloadToSend));
    }

    return (
        <View style={Styles.mqttActionComponentContainer}>
            <View style={Styles.mqttActionComponentElement}>
                <Pressable
                    style={Styles.button}
                    onPress={() => handlePublishMessage()}
                >
                    <Text style={Styles.buttonText}>
                        Publish
                    </Text>
                </Pressable>
            </View>
            <View style={Styles.mqttActionComponentElement}>
                <TextInput
                    style={Styles.input}
                    placeholder="message..."
                    placeholderTextColor={'grey'}
                    onChangeText={setMessageInput}
                    value={messageInput}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="topic..."
                    placeholderTextColor={'grey'}
                    onChangeText={setTopicInput}
                    value={topicInput}
                />
            </View>
        </View>
    )
}

export default Publish;