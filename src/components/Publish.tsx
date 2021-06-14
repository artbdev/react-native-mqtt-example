import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native'
import { Styles } from '../../assets/Styles';

const Publish = ({publish}) => {
    const [messageInput, setMessageInput] = useState<string>("");
    const [topicInput, setTopicInput] = useState<string>("");

    return (
        <View>
            <Pressable
                style={Styles.button}
                onPress={() => publish(topicInput, messageInput)} 
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
                placeholder="topic"
                onChangeText={setTopicInput}
                value={topicInput}
            />
        </View>
    )
}

export default Publish;

