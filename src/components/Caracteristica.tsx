import { View, Text} from 'react-native'
import { stylized } from '../constants/styles'

export const Caracteristica = ({keyC, value}: {keyC: string, value: string}) => {
    return (
        <View style={{flexDirection: 'row', marginRight: 6, alignSelf: 'flex-start'}}>
            <Text style={[stylized.titleDescription, {marginRight: 4}]}>{keyC}:</Text>
            <Text style={stylized.titleGreyRegular}>{value}</Text>
        </View>
    )
}