import { SafeAreaView } from "react-native-safe-area-context"
import {Text} from 'react-native'
import { FormImageInput } from "../Form/FormImageInput";

export const FormRegisterThird = () => {
    return (
        <SafeAreaView>
            <Text style={{fontSize: 16, fontWeight: '800'}}>Selecione uma foto</Text>
            <FormImageInput />
        </SafeAreaView>
    )
}