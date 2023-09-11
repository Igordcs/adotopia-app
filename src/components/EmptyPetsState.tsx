import {View, Image, Text, Pressable} from 'react-native'
import Colors from '../constants/Colors'
import { Link } from 'expo-router'

export const EmptyPetsState = () => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{marginTop: 24}}>
                <Image 
                    source={require('../assets/illustrations/Bored.png')}  
                />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', width: '80%', marginTop: 48}}>
                <Text style={{fontSize: 24, fontWeight: '600', fontFamily: 'Lexend_600SemiBold', textAlign: 'center'}}>Faça alguém feliz</Text>
                <Text style={{fontSize: 14, fontWeight: '400', fontFamily: 'Lexend_400Regular', textAlign: 'center'}}>Doe para alguém feliz um amiguinho feliz </Text>

                <Link href="/addPet/addPetForm" asChild>
                    <Pressable style={{width: '60%', backgroundColor: Colors.default.primary, padding: 12, marginTop: 24, borderRadius: 6, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: Colors.default.white, fontFamily: 'Lexend_500Medium'}}>
                            Doar Pet
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}