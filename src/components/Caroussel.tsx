import {View, Text, Image} from 'react-native'

export const Caroussel = () => {
    return (
        <View
            style={{height: '30%'}}
        >
            <Image 
                style={{height: '100%'}}
                resizeMode='cover'
                source={{
                    uri: 'https://petshopdamadre.com.br/wp-content/uploads/2022/11/125.jpg'
                }}
            />
        </View>
    )
}