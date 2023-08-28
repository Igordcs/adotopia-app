import { MaterialCommunityIcons } from '@expo/vector-icons'
import {View, Text} from 'react-native'
import { stylized } from '../constants/styles'
import Colors from '../constants/Colors'

export const PetAction = ({text }: {text: string}) => {
    return (
        <View style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            paddingVertical: 4,
            paddingHorizontal: 8,
            backgroundColor: Colors.default.primary,
            borderRadius: 32,
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <MaterialCommunityIcons name="teddy-bear" size={24} color="white" />
            <Text style={[stylized.messageContent, {fontSize: 10, color: Colors.default.white, marginLeft: 8}]}>
                {text}
            </Text>
        </View>
    )
}