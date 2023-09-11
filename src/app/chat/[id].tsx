import {View,Text, Pressable, Image, ScrollView, TextInput, StyleSheet} from 'react-native'
import {useContext} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import { ChatMessage } from '../../components/ChatMessage'
import { router, useLocalSearchParams } from 'expo-router'
import { chatContext } from '../../contexts/chat/chatContext';
import { authContext } from '../../contexts/auth/authContext';

export default function ChatDetails() {
    const { id } = useLocalSearchParams();
    const chatIndex = Number(id);
    const { chats, mensagem, handleMessageInput, enviaMensagem} = useContext(chatContext);
    const { user } = useContext(authContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={{width: 32, height: 32}} onPress={() => router.back()}>
                    <MaterialCommunityIcons name='chevron-left' size={32} color={Colors.default.black} />
                </Pressable>
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 6}}>
                    {/* <Image
                        style={{width: 48, height: 48, borderRadius: 48/2, marginRight: 8}}
                        source={{
                            uri: 'https://pps.whatsapp.net/v/t61.24694-24/353996294_3578687815792912_3741667932244766410_n.jpg?ccb=11-4&oh=01_AdTDxuRFJpgna9nQqFTpONPscaFvf5GkiFZrobfbSwBpSg&oe=64F61D91&_nc_cat=109'
                        }}
                    /> */}
                    <Text style={styles.titleMessage}>{chats[chatIndex].destinatario.nome}</Text>
                </View>
            </View>
            <View style={{flex: 1}}>
                <ScrollView
                    alwaysBounceVertical
                    style={{flex: 1}}
                >
                    {chats[chatIndex]
                        .mensagens
                        .map((mensagem, index) => <ChatMessage 
                                                    key={`${index}+${mensagem.remetenteUsuario.id}`}
                                                    text={mensagem.conteudoMsg} 
                                                    sender={mensagem.remetenteUsuario.id == user?.id}/>
                    )}
                </ScrollView>
            </View>
            
            <View style={{flexDirection: 'row', marginBottom: 10, paddingHorizontal: 12}}>
                <TextInput 
                placeholder='Escreva sua mensagem'
                value={mensagem}
                onChangeText={(text) => handleMessageInput(text)}
                style={{
                    backgroundColor: Colors.default.grey,
                    padding: 12,
                    flex: 1,
                    borderRadius: 6
                }} />
                <Pressable 
                    onPress={() => enviaMensagem(chats[chatIndex].id)}
                    style={{
                        padding: 8, 
                        marginLeft: 4, 
                        borderRadius: 6,
                        backgroundColor: Colors.default.primary, 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}>
                    <MaterialCommunityIcons name='send' size={32} color={Colors.default.white}/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 32, 
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomWidth: 2, 
        borderBottomColor: Colors.default.grey, 
        paddingVertical: 8
    },
    titleMessage: {
        fontSize: 16,
        color: Colors.default.black,
        fontFamily: 'Lexend_400Regular',
    },
})