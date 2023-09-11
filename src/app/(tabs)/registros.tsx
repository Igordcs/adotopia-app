import { SafeAreaView } from "react-native-safe-area-context";
import {Text, StyleSheet, View} from 'react-native';
import {useContext, useCallback} from 'react';
import { stylized } from "../../constants/styles";
import Colors from "../../constants/Colors";
import { animalContext } from "../../contexts/animal/animalContext";
import { useFocusEffect } from "expo-router";
import { Registro } from "../../components/Registro/Registro";

export default function Registros() {
    const {getMyRegistros, registros} = useContext(animalContext);

    useFocusEffect(
        useCallback(() => {
            getMyRegistros()
        }, [])
      );

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={stylized.titleSemiBold}>Registros</Text>
                <Text style={[stylized.titleDescription, {width: '60%'}]}>Veja aqui os registros dos animais que você adotou</Text>
            </View>
            {registros.map((registro) => <Registro key={`${registro.protocolo}+${registro.id}`} registro={registro}  />)}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.default.white,
        paddingHorizontal: 12
    },
})