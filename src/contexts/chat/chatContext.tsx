import React, { createContext, useContext, useState} from "react"
import {Alert} from 'react-native';
import { authContext } from "../auth/authContext"
import chatService from "../../services/chat/chatService";
import { ChatResponseType } from "../../interfaces/chat";
import mensagemService from "../../services/mensagem/mensagemService";
import { MensagemRequestType, MensagemResponseType } from "../../interfaces/mensagem";
import { router } from "expo-router";

interface ChatProps {
    chats: ChatResponseType[],
    mensagem: string,
    criarChat(destinatarioId: number): Promise<'CREATED' | void>,
    getAllChats(): Promise<'OK' | void>,
    handleMessageInput(text: string): void,
    enviaMensagem(chatId: number): Promise<'OK' | void>,
}

export const chatContext = createContext<ChatProps>({} as ChatProps)

export const ChatProvider: React.FC<any> = ({children}: any) => {
    const {user} = useContext(authContext);
    const [chats, setChats] = useState<ChatResponseType[]>([])
    const [mensagem, setMensagem] = useState('')

    async function criarChat (destinatarioId: number) {
        if (!user)
            return;

        const response = await chatService.createChat(user.id, destinatarioId);

        if(response.error)
            return Alert.alert(response.error);

        router.push("/(tabs)/contacts");

        return 'CREATED';
    }

    function handleMessageInput(text: string) {
        setMensagem(text);
    }

    async function getAllChats () {
        if (!user)
            return;

        const response = await chatService.getAll(user.id);
        
        if(response.error)
            return console.log(response.error);

        setChats(response);

        return 'OK';
    }

    function adicionarMensagemAoChat(chatId: number, mensagem: MensagemResponseType) {
        const novosChats = [...chats];
        const chatEncontrado = novosChats.find((chat) => chat.id === chatId);

        if (chatEncontrado) {
            const novoChat = { ...chatEncontrado };
            novoChat.mensagens.push(mensagem);

            const chatIndex = novosChats.findIndex((chat) => chat.id === chatId);
            novosChats[chatIndex] = novoChat;
            setChats(novosChats);
        }
    }

    async function enviaMensagem(chatId: number) {
        if (!user)
            return;
        const mensagemRequest: MensagemRequestType = {
            conteudoMsg: mensagem,
            data: new Date().toISOString(),
        }

        const response = await mensagemService.enviarMensagem(chatId, user.id, mensagemRequest);
        
        if(response.error)
            return console.log(response.error);

        adicionarMensagemAoChat(chatId, response);
        setMensagem('');

        return 'OK';
    }

    return (
        <chatContext.Provider
            value={{
                criarChat,
                chats,
                getAllChats,
                mensagem,
                handleMessageInput,
                enviaMensagem
            }}
        >
            {children}
        </chatContext.Provider>
    )
}
