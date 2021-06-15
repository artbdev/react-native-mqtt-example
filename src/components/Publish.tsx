import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react';
import { Styles } from '../../assets/Styles';
import { PublishProps } from '../../Interfaces';

const Publish: React.FC<PublishProps> = (props: PublishProps) => {
    const [messageInput, setMessageInput] = useState<string>("");
    const [topicInput, setTopicInput] = useState<string>("");

    return (
        <View>
            <Pressable
                style={Styles.button}
                onPress={() => props.publish(topicInput, messageInput)} 
            >
                <Text>
                    Publish
                </Text>
            </Pressable>
            <TextInput 
                style={Styles.input}
                placeholder="message"
                onChangeText={setMessageInput}
                value={messageInput}
            />
            <TextInput 
                style={Styles.input}
                placeholder="publish to topic"
                onChangeText={setTopicInput}
                value={topicInput}
            />
        </View>
    )
}

export default Publish;

