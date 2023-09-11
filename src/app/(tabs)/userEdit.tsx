import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { stylized } from '../../constants/styles';
import Colors from '../../constants/Colors';

export function userEdit() {
    return (
        <SafeAreaView style={{backgroundColor: Colors.default.white}}>
            <Text style={stylized.titleSemiBold}>Contatos</Text>
        </SafeAreaView>
    )
}