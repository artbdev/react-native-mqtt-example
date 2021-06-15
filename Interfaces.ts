export interface MessageContainerProps {
    messages: PayloadProps[];
}

export interface PayloadProps {
    topic: string;
    content: string;
}
