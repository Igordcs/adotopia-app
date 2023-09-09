import {View,Text, Pressable, Image, ScrollView, TextInput} from 'react-native'
import { stylized } from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import { ChatMessage } from '../../components/ChatMessage'

export default function ChatDetails() {
    return (
        <View style={stylized.rootContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: Colors.default.grey, paddingVertical: 8}}>
                <Pressable style={{width: 32, height: 32}}>
                    <MaterialCommunityIcons name='chevron-left' size={32} color={Colors.default.black} />
                </Pressable>
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 6}}>
                    <Image
                        style={{width: 48, height: 48, borderRadius: 48/2, marginRight: 8}}
                        source={{
                            uri: 'https://pps.whatsapp.net/v/t61.24694-24/353996294_3578687815792912_3741667932244766410_n.jpg?ccb=11-4&oh=01_AdTDxuRFJpgna9nQqFTpONPscaFvf5GkiFZrobfbSwBpSg&oe=64F61D91&_nc_cat=109'
                        }}
                    />
                    <Text style={stylized.titleMessage}>Rafael Alves</Text>
                </View>
            </View>

            <ScrollView
            >
                <ChatMessage text={"Fala meu amigo, vamo conversar aí sobre o pantero?"} sender={true}/>
                <ChatMessage text={"Fala meu amigo, vamo conversar aí sobre o pantero?"} sender={false}/>
            </ScrollView>
            
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <TextInput 
                placeholder='Escreva sua mensagem'
                style={{
                    backgroundColor: Colors.default.grey,
                    padding: 12,
                    flex: 1,
                    borderRadius: 6
                }} />
                <Pressable style={{padding: 8, marginLeft: 4, borderRadius: 6,backgroundColor: Colors.default.primary, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name='send' size={32} color={Colors.default.white}/>
                </Pressable>
            </View>
        </View>
    )
}