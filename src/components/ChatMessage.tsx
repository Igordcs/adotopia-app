import {View, Text, Dimensions} from 'react-native'
import Colors from '../constants/Colors'
import { stylized } from '../constants/styles'

export const ChatMessage = ({text, sender}: {text: string, sender: boolean}) => {
    const {width: screenWidth} = Dimensions.get('screen')
    return (
        <View style={{
            backgroundColor: sender ? Colors.default.grey : Colors.default.primary,
            alignSelf: sender ? 'flex-end' : 'flex-start',
            maxWidth: screenWidth * 0.7,
            padding: 12,
            borderRadius: 12,
            marginBottom: 12
        }}>
            <Text style={[stylized.chatMessageContent, {color: sender ? Colors.default.black : Colors.default.white}]}>
                {text} 
            </Text>
        </View>
    )
}