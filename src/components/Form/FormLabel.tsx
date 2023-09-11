import {StyleSheet, Text} from 'react-native';

export const FormLabel = ({text}: {text: string}) => {
    return <Text style={styles.inputLabel}>{text}</Text>
}

const styles = StyleSheet.create({
    inputLabel: {
        paddingVertical: 10,
        fontWeight: '700',
    },
})