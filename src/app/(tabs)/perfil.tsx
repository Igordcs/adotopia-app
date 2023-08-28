import {View, Text,  Image, Pressable} from 'react-native'
import { stylized } from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

export default function Contacts() {
    return (
        <View style={[stylized.rootContainer]}>
            <Text style={stylized.titleSemiBold}>Perfil</Text>
            <View style={{flex: 1, alignItems: 'center', marginTop: 18}}>
                <View style={{marginBottom: 24}}>
                    <Image 
                        style={{width: 150, height: 150, borderRadius: 150/2}}
                        source={{
                            uri: 'https://pps.whatsapp.net/v/t61.24694-24/353996294_3578687815792912_3741667932244766410_n.jpg?ccb=11-4&oh=01_AdTDxuRFJpgna9nQqFTpONPscaFvf5GkiFZrobfbSwBpSg&oe=64F61D91&_nc_cat=109'
                        }} 
                    />
                    <Text style={stylized.perfilName}>Rafael Alves</Text>
                    <Text style={stylized.perfilAge}>19 anos</Text>
                </View>
                <View style={{marginBottom: 24}}>
                    <Text style={[stylized.titleSemiBold, {textAlign: 'center', marginBottom: 4}]}>
                        Contatos
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name='phone' size={24}  />
                        <Text style={[stylized.perfilAge, {marginLeft: 4}]}>
                            (87) 00000-0000
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name='email' size={24}  />
                        <Text style={[stylized.perfilAge, {marginLeft: 4}]}>
                            rafael123@gmail.com
                        </Text>
                    </View>
                </View>

                <View>
                    <Text style={[stylized.titleSemiBold, {textAlign: 'center', marginBottom: 4}]}>
                        Localização
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name='map' size={24}  />
                        <Text style={[stylized.perfilAge, {marginLeft: 4}]}>
                            Buique-PE
                        </Text>
                    </View>
                </View>

                <Pressable style={{width: '60%', alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 4, borderWidth: 2, borderColor: Colors.default.primary, marginTop: 12}}>
                    <Text style={stylized.editButtonText}>
                        Editar Perfil
                    </Text>
                </Pressable>
                <Pressable style={{width: '60%', alignItems: 'center', justifyContent: 'center', padding: 12, backgroundColor: Colors.default.red, borderRadius: 4, marginTop: 12}}>
                    <Text style={[stylized.editButtonText, {color: Colors.default.white}]}>
                        Fazer logout
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}