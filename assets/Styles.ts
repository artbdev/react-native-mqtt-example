import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const scaledUnits = { width: screenWidth / 100, height: screenHeight / 100 };
const generalFontSize = scaledUnits.width * 4.2;
const scaledHeight = scaledUnits.height;
const scaledWidth = scaledUnits.width;

export const Styles = StyleSheet.create({
    header: {
        flex: 1,
        paddingTop: 5,
        marginTop: scaledHeight * 3,
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: scaledUnits.width * 8
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 6,
        margin: 5,
        width: screenWidth * .4,
        alignItems: "center"
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: generalFontSize,
    },
    input: {
        borderBottomWidth: 1,
        padding: 10,
        margin: 5,
        width: screenWidth * .4,
        fontSize: generalFontSize
    },
    clientConnectComponent: {
        flex: 1,
    },
    clientSubscribeComponent: {
        flex: 1.5
    },
    clientPublishComponent: {
        flex: 1.5,
    },
    messagesContainer: {
        flex: 3.5,
        width: scaledWidth * 85,
        marginTop: scaledHeight * 4,
    },
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mqttActionComponentContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
    },
    mqttActionComponentElement: {
        margin: 5
    },
    messageRowContainer: {
        padding: 3
    },
    messageContainerText: {
        fontSize: generalFontSize * 1.2,
    },
    messageContainerHeaderText: {
        fontSize: scaledUnits.width * 6.5,
        fontWeight: "bold",
        flex: 1,
    },
    messagesClearButton: {
        alignSelf: "flex-end",
        borderWidth: 1,
        borderRadius: 10,
        padding: 6,
        width: screenWidth * .4,
    },
    messageCollectionContainer: {
        height: scaledHeight * 20,
        margin: scaledHeight * 2
    },
    messageReceiveDateTime: {
        alignSelf: "flex-end",
        fontSize: generalFontSize * .7
    },
    messageTopicLabel: {
        fontSize: generalFontSize * .75,
    }
})