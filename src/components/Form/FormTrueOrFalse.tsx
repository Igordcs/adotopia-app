import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'

const {width} = Dimensions.get("window");

interface FormTrueOrFalseProps {
    labelName: string,
    setStateValue: (fieldName: string, fieldValue: any) => void
}

export const FormTrueOrFalse = ({labelName, setStateValue}: FormTrueOrFalseProps) => {
    const [pressed, setPressed] = useState(0);
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.button, pressed === 1 && styles.buttonPressed]} 
                    onPress={() => {
                        setPressed(1);
                        setStateValue(labelName, true)
                    }}
                >
                    <Text 
                        style={{color: pressed === 1 ? Colors.default.white : Colors.default.black}}>
                        Sim
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, pressed === 2 && styles.buttonPressed, {marginLeft: 4}]} 
                    onPress={() => {
                        setPressed(2);
                        setStateValue(labelName, false)
                    }}
                >
                    <Text 
                        style={{color: pressed === 2 ? Colors.default.white : Colors.default.black}}>
                        Não
                    </Text>
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
    },
    buttonPressed: {
        backgroundColor: Colors.default.primary,
    }
})