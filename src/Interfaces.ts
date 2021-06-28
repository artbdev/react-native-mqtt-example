/* Connection options prop is in no way    
   ad exaustive list of options available.
   Please see https://github.com/mqttjs/MQTT.js/blob/master/README.md#client
   for more detais.
*/

export interface ConnectionOptionProps {
    webSocketOptions?: boolean;
    keepAlive?: number;
    clientId?: string;
    prototypeId?: string;
    protocolVersion?: string;
    clean?: boolean;
    usernames?: string;
    password?: string;
}
    
export interface ConnectionProps {
    connect: (url: string, connectionOptions: ConnectionOptionProps) => void;
    disconnect: () => void;
    connectionButtonLabel: string;
    isConnected: boolean;
}

export interface SubscribeProps {
    subscribe: (topic: string) => void;
    unsubscribe: (topic: string) => void;
}

export interface PublishProps {
    publish: (topic: string, message: string) => void;
    clearMessages: () => void;
}

export interface MessageCollectionContainerProps {
    messages: PayloadProps[];
    clearMessages: () => void;
}

export interface PayloadProps {
    topic?: string;
    content: string;
    dateTimeSent: string;
    dateTimeReceived?: string;
}
