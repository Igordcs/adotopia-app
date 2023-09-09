import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const FormTextInput = ({labelNome, inputPlaceHolder} : {labelNome: string, inputPlaceHolder: string}) => {
    return (
        <View>
            <Text style={styles.inputLabel}>{labelNome}</Text>
            <TextInput style={styles.input} placeholder={inputPlaceHolder}  />
        </View>
    )
}

const styles = StyleSheet.create({
    inputLabel: {
        paddingVertical: 10,
        fontWeight: '700',
    },
    input: {
        padding: 14,
        backgroundColor: Colors.default.grey,
        borderRadius: 8,
    }
})