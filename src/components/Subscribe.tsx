import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native'
import { Styles } from '../../assets/Styles';
import { SubscribeProps } from '../../Interfaces';

const Subscribe: React.FC<SubscribeProps> = (props: SubscribeProps) => {
    const [subscribeToTopicInput, setSubscribeToTopicInput] = useState<string>("");
    const [unSubscribeToTopicInput, setUnsubscribeToTopicInput] = useState<string>("");

    const handleSubscribe = () => {
        props.subscribe(subscribeToTopicInput);
    };

    const handleUnsubscribe = () => {
        props.unsubscribe(unSubscribeToTopicInput)
    }

    return (
        <View>
            <Pressable
                style={Styles.button}
                onPress={handleSubscribe}
            >
                <Text>Subscribe</Text>    
            </Pressable>
            <TextInput
                style={Styles.input}
                onChangeText={setSubscribeToTopicInput}
                value={subscribeToTopicInput}
                placeholder="Subcribe to topic"
            />
            <Pressable
                onPress={handleUnsubscribe}
                style={Styles.button}    
            >
                <Text>
                    Unsubscribe
                </Text>
            </Pressable>
            <TextInput
                style={Styles.input}
                onChangeText={setUnsubscribeToTopicInput}
                value={unSubscribeToTopicInput}
                placeholder="Usbcribe to topic"
            />
        </View>
    )
}

export default Subscribe;