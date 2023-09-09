import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'

const {width} = Dimensions.get("window");

export const FormTrueOrFalse = () => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button]}>
                    <Text>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {marginLeft: 4}]}>
                    <Text>Não</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    labelText: {
        paddingVertical: 10,
        fontWeight: '700',
    },
    button: {
        width: width / 2.5,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: Colors.default.grey,
    }
})