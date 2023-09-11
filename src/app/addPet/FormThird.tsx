import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useContext, useState} from 'react';
import { ComportamentoButton } from '../../components/Form/comportamentoButton';
import { FormTrueOrFalse } from '../../components/Form/FormTrueOrFalse';
import { animalContext } from '../../contexts/animal/animalContext';
import { FormImageInput } from '../../components/Form/FormImageInput';

export function FormThird() {    
    return (
        <>
            <SafeAreaView style={{flex: 0.8}}>
                <FormImageInput  />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    labelTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
    },
    petAction: {
        paddingHorizontal: 18,
        height: 48,
        borderRadius: 48,
        marginTop: 8,
        justifyContent: 'flex-start'
    }
})