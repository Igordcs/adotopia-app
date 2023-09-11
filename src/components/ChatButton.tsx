import {View, Text, Image, Pressable} from 'react-native'
import { MessageInfo } from '../constants/types'
import { stylized } from '../constants/styles'
import { Link } from 'expo-router'
import { ChatResponseType } from '../interfaces/chat'
import formatarDataChat from '../util/formatData'

export const ChatButton = ({chat, index}: {chat: ChatResponseType, index: number}) => {
    return (
        <Link href={`/chat/${index}`} asChild>
            <Pressable style={{borderBottomWidth: 2, borderBottomColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', padding: 12}}>
                {/* <View>
                    <Image 
                        style={{width: 64, height: 64, borderRadius: 64/2}}
                        source={{uri: message.remetente.id}} 
                        resizeMode='cover'
                        
                    />
                </View> */}
                <View style={{width: '60%'}}>
                    <Text style={stylized.titleMessage}>{chat.remetente.nome}</Text>
                    <Text style={stylized.messageContent}>{chat.mensagens[0].conteudoMsg}</Text>
                </View>
                <View>
                    <Text>{formatarDataChat(chat.mensagens[0].data)}</Text>
                </View>
            </Pressable>
        </Link>
    )
}