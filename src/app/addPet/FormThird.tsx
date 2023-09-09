import { MaterialCommunityIcons } from '@expo/vector-icons';
import {View, Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import { stylized } from '../../constants/styles';
import { FormTextInput } from '../../components/Form/FormTextInput';
import { FormSelectInput } from '../../components/Form/FormSelectInput';
import Colors from '../../constants/Colors';
import { FormImageInput } from '../../components/Form/FormImageInput';

export function FormThird() {
    return (
        <>
            <SafeAreaView style={{flex: 0.8}}>
                <Text style={styles.labelTitle}>Adicione fotos do pet</Text>
                <FormImageInput /> 
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
})