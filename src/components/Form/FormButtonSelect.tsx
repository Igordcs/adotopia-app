import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'

export const FormButtonSelect = ({label, options}: {label: string, options: any[]}) => {
    

    return (
        <>
            <Text style={styles.labelText}>{label}</Text>
            <View style={styles.container}>
                {options.map(option => <TouchableOpacity key={option.id} style={styles.button}>
                    <Text>{option.labelName}</Text>
                </TouchableOpacity>)}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labelText: {
        paddingVertical: 10,
        fontWeight: '700',
    },
    button: {
        padding: 12,
        backgroundColor: Colors.default.grey,
    }
})