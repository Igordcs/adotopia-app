import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

interface FormTextInput extends TextInputProps {
    labelNome: string, 
    inputPlaceHolder: string,
    value: any,
    setStateValue: (fieldName: string, fieldValue: any) => void,
}

export const FormTextInput: React.FC<FormTextInput> = ({labelNome, inputPlaceHolder, value, setStateValue, ...rest} : FormTextInput) => {
    return (
        <>
            <TextInput 
                style={styles.input} 
                placeholder={inputPlaceHolder} 
                value={value} 
                onChangeText={(text: string) => setStateValue(labelNome, text)} 
                {...rest} 
            />
        </>
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