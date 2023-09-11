import {View, Text,  Image, Pressable, StyleSheet, Platform, StatusBar} from 'react-native'
import { stylized } from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import { useContext } from 'react'
import { authContext } from '../../contexts/auth/authContext'
import { router } from 'expo-router'

export default function Contacts() {
    const {user} = useContext(authContext);

    return (
        <View style={[styles.container]}>
            <Text style={stylized.titleSemiBold}>Perfil</Text>
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{marginBottom: 24}}>
                    <Text style={styles.perfilName}>{user?.nome}</Text>
                </View>
                <View style={{marginBottom: 24, alignItems: 'center'}}>
                    <Text style={[stylized.titleSemiBold, {textAlign: 'center', marginBottom: 4}]}>
                        Contatos
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name='phone' size={24}  />
                        <Text style={[stylized.perfilAge, {marginLeft: 4}]}>
                            {user?.telefone}
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name='email' size={24}  />
                        <Text style={[stylized.perfilAge, {marginLeft: 4}]}>
                            {user?.email}
                        </Text>
                    </View>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={[stylized.titleSemiBold, {textAlign: 'center', marginBottom: 4}]}>
                        Localização
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name='map' size={24}  />
                        <Text style={[stylized.perfilAge, {marginLeft: 4}]}>
                            Garanhuns-PE
                        </Text>
                    </View>
                </View>

                <Pressable 
                    style={{width: '60%', alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 4, borderWidth: 2, borderColor: Colors.default.primary, marginTop: 12}}
                    onPress={() => router.push("/(auth)/userEdit")}
                >
                    <Text style={stylized.editButtonText}>
                        Editar Perfil
                    </Text>
                </Pressable>
                <Pressable style={{width: '60%', alignItems: 'center', justifyContent: 'center', padding: 12, backgroundColor: Colors.default.red, borderRadius: 4, marginTop: 12}}
                    onPress={() => router.push("/(auth)/")}
                >
                    <Text style={[stylized.editButtonText, {color: Colors.default.white}]}>
                        Fazer logout
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: Platform.OS === 'ios' ? 55 : StatusBar.currentHeight,
        backgroundColor: '#fff',
    },
    perfilName: {
        fontSize: 24,
        color: Colors.default.black, 
        fontWeight: '600', 
        fontFamily: 'Lexend_600SemiBold',
        textAlign: 'center'
    }
})