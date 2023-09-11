import {View, StyleSheet, Image, Text, Dimensions, ImageSourcePropType} from 'react-native';
import Colors from '../../constants/Colors';

export const OnboardingItem = (item: {title: string, description: string, image: ImageSourcePropType}) => {
    const {width} = Dimensions.get("window");
    return (
        <View style={[styles.container, {width}]}>
            <Image style={[styles.image, {width: width - 36}]} source={item.image} resizeMode='contain' />
            <View style={{flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.7,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 18,
        color: Colors.default.primary,
        textAlign: 'center'
    },
    description: {
        fontWeight: '400',
        paddingHorizontal: 64,
        color: Colors.default.black,
        textAlign: 'center'
    }
})