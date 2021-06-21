export const formatSendDateTime = (): string => {
    const messsageSendDateTime = new Date();
    const messageLocaleDate = messsageSendDateTime.toLocaleDateString().replace(/\//g,'.');
    const messageLocaleTime = messsageSendDateTime.toLocaleTimeString(undefined, {timeStyle: "short"}).toLocaleLowerCase();
    return `${messageLocaleDate} ${messageLocaleTime}`;
};