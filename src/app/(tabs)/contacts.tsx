import {View, Text, FlatList } from 'react-native'
import { stylized } from '../../constants/styles'
import { ChatButton } from '../../components/ChatButton'
import { useContext, useCallback } from 'react'
import { chatContext } from '../../contexts/chat/chatContext'
import { useFocusEffect } from '@react-navigation/native'

export default function Contacts() {
    const {chats, getAllChats} = useContext(chatContext);

    useFocusEffect(
        useCallback(() => {
            getAllChats()
        }, [])
    );

    return (
        <View style={stylized.rootContainer}>
            <Text style={stylized.titleSemiBold}>Contatos</Text>

            <View style={{flex: 1}}>
                <FlatList 
                    data={chats}   
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item, index}) => <ChatButton chat={item} index={index} />}
                />
            </View>
        </View>
    )
}