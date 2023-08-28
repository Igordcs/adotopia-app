import {View, Text, FlatList } from 'react-native'
import { stylized } from '../../constants/styles'
import { MessageInfo } from '../../constants/types'
import { MessageButton } from '../../components/MessageButton'

export default function Contacts() {
    const messages: MessageInfo[] = [
        {
            id: 1,
            name: 'Matheus Oliveira',
            content: 'Matheus.Oliveira@email.com',
            data: new Date(),
            userAvatar: 'https://petshopdamadre.com.br/wp-content/uploads/2022/11/125.jpg',
        },
        {
            id: 2,
            name: 'Matheus Oliveira',
            content: 'Matheus.Oliveira@email.com',
            data: new Date(),
            userAvatar: 'https://4maos.com.br/wp-content/uploads/2022/06/fc69cd2bb55f411f5717eb84419b0ed8.jpg',
        },
        {
            id: 3,
            name: 'Matheus Oliveira',
            content: 'Matheus.Oliveira@email.com',
            data: new Date(),
            userAvatar: 'https://4maos.com.br/wp-content/uploads/2022/06/fc69cd2bb55f411f5717eb84419b0ed8.jpg',
        },
    ]

    return (
        <View style={stylized.rootContainer}>
            <Text style={stylized.titleSemiBold}>Contatos</Text>

            <View style={{flex: 1}}>
                <FlatList 
                    data={messages}   
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => <MessageButton message={item} />}
                />
            </View>
        </View>
    )
}