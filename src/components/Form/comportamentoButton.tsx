import { Pressable, View, Text } from "react-native"
import Colors from "../../constants/Colors"
import { stylized } from "../../constants/styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useState } from "react"

export const ComportamentoButton = ({text, onPress}: {text: string, onPress: any}) => {
    const [selecionado, setSelecionado] = useState(false);

    const handleOnPress = () => {
        onPress();
        setSelecionado(!selecionado);
    }

    return (
        <Pressable onPress={handleOnPress}>
            <View style={{
                alignSelf: 'flex-start',
                height: 50,
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 12,
                backgroundColor: selecionado ? '#597ede' : Colors.default.primary,
                borderRadius: 32,
                alignItems: 'center',
                marginTop: 8,
                marginRight: 8,
            }}>
            <MaterialCommunityIcons name="teddy-bear" size={24} color="white" />
            <Text style={[stylized.messageContent, {fontSize: 10, color: Colors.default.white, marginLeft: 8}]}>
                {text}
            </Text>
        </View>
        </Pressable>
    )
}