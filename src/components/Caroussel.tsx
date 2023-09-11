import {View, Text, Image} from 'react-native'

export const Caroussel = ({item}: {item: string}) => {
    return (
        <View
            style={{height: '30%'}}
        >
            <Image 
                style={{height: '100%'}}
                resizeMode='cover'
                source={{
                    uri: item
                }}
            />
        </View>
    )
}