import {View, Image, Text, Pressable} from 'react-native'
import Colors from '../constants/Colors'

export const EmptyPetsState = () => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{marginTop: 24}}>
                <Image 
                    source={require('../assets/illustrations/Bored.png')}  
                />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', width: '80%', marginTop: 48}}>
                <Text style={{fontSize: 24, fontWeight: '600', fontFamily: 'Lexend_600SemiBold', textAlign: 'center'}}>Nenhum Pet</Text>
                <Text style={{fontSize: 14, fontWeight: '400', fontFamily: 'Lexend_400Regular', textAlign: 'center'}}>No momento você não possui nenhum animal para adoção</Text>

                <Pressable style={{width: '60%', backgroundColor: Colors.default.primary, padding: 12, marginTop: 24, borderRadius: 6, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: Colors.default.white, fontFamily: 'Lexend_500Medium'}}>
                        Doar Pet
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}