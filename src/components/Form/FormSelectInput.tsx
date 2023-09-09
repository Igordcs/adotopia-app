import {Text, StyleSheet, Dimensions, Modal, View, SafeAreaView, FlatList} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from "../../constants/Colors";
import { useState } from "react";

const {width} = Dimensions.get("window");

export const FormSelectInput = ({text, options, onChangeSelect, label} : {text: string, options: {id: number, labelName: string, labelValue: string}[], onChangeSelect: any, label: string}) => {
    const [txt, setTxt] = useState(text);
    const [selected, setSelected] = useState('');
    const [modalVisible, setModalVisble] = useState(false);

    const renderOption = (item: any) => {
        return (
            <TouchableOpacity style={[styles.optionContainer, {
                backgroundColor: item.id === selected ? Colors.default.grey : Colors.default.white
            }]} onPress={() => {
                onChangeSelect(item.id)
                setTxt(item.labelName)
                setSelected(item.id)
                setModalVisble(false)
            }}>
                <Text>{item.labelName}</Text>
                {item.id === selected && <MaterialCommunityIcons name="check" size={24} />}
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => setModalVisble(true)}
            >
                <Text style={styles.txt} numberOfLines={1}>{txt}</Text>
                <MaterialCommunityIcons name='chevron-down' size={24} color={Colors.default.black} />
            </TouchableOpacity>
            
            <Modal 
                animationType="slide" 
                visible={modalVisible} 
                onRequestClose={() => setModalVisble(false)}
            >
                <SafeAreaView>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setModalVisble(false)}>
                            <MaterialCommunityIcons name="chevron-left" size={36 }   />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{text}</Text>
                        <TouchableOpacity onPress={() => setModalVisble(false)}>
                           <Text style={styles.modalCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={options}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => renderOption(item)}
                    />
                </SafeAreaView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: Colors.default.grey,
        paddingHorizontal: 12,
        borderRadius: 8,
        fontSize: 18,
        borderColor: "#ccc",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txt: {
        color: '#555',
        fontSize: 16,
        width: width - 90
    },
    modalTitle: {
        fontSize: 18,
        color: Colors.default.black,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 8,
    },
    modalCancel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: Colors.default.grey,
        borderBottomWidth: 1,
        padding: 12,
    },
    label: {
        color: Colors.default.black,
        fontWeight: 'bold',
        paddingVertical: 10,
    }
})