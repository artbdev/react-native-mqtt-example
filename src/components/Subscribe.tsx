import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native'
import { Styles } from '../../assets/Styles';
import { SubscribeProps } from '../Interfaces';

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
        <View style={Styles.mqttActionComponentContainer}>
            <View style={Styles.mqttActionComponentElement}>
                <Pressable
                    style={Styles.button}
                    onPress={handleSubscribe}
                >
                    <Text style={Styles.buttonText}>Subscribe</Text>
                </Pressable>
                <TextInput
                    style={Styles.input}
                    onChangeText={setSubscribeToTopicInput}
                    value={subscribeToTopicInput}
                    placeholder="Subscribe..."
                    placeholderTextColor={'grey'}
                />
            </View>
            <View style={Styles.mqttActionComponentElement}>
                <Pressable
                    onPress={handleUnsubscribe}
                    style={Styles.button}
                >
                    <Text style={Styles.buttonText}>
                        Unsubscribe
                    </Text>
                </Pressable>
                <TextInput
                    style={Styles.input}
                    onChangeText={setUnsubscribeToTopicInput}
                    value={unSubscribeToTopicInput}
                    placeholder="Unsubcribe..."
                    placeholderTextColor={'grey'}
                />
            </View>
        </View>
    )
}

export default Subscribe;