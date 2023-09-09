import {View, Text, Image, Pressable} from 'react-native'
import { MessageInfo } from '../constants/types'
import { stylized } from '../constants/styles'
import { Link } from 'expo-router'

export const MessageButton = ({message}: {message: MessageInfo}) => {
    return (
        <Link href={`/chat/${message.id}`} asChild>
            <Pressable style={{borderBottomWidth: 2, borderBottomColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', padding: 12}}>
                <View>
                    <Image 
                        style={{width: 64, height: 64, borderRadius: 64/2}}
                        source={{uri: message.userAvatar}} 
                        resizeMode='cover'
                        
                    />
                </View>
                <View style={{width: '60%'}}>
                    <Text style={stylized.titleMessage}>{message.name}</Text>
                    <Text style={stylized.messageContent}>{message.content}</Text>
                </View>
                <View style={{width: 48}}>
                    <Text>08:45</Text>
                </View>
            </Pressable>
        </Link>
    )
}