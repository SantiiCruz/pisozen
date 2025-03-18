import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { colors } from '@/src/styles/colors';

interface CustomPickerProps {
    options: string[];
    selectedValue: string;
    onSelect: (value: string) => void;
}

const CustomPicker = ({ options, selectedValue, onSelect }: CustomPickerProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.pickerText}>{selectedValue || 'Seleccionar'}</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalOverlay} onTouchEnd={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={options}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.option} onPress={() => {
                                    onSelect(item);
                                    setModalVisible(false);
                                }}>
                                    <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CustomPicker;

const styles = StyleSheet.create({
    pickerContainer: {
        margin: 2,
        padding: 5,
    },
    pickerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.secondary,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: colors.background,
        borderRadius: 8,
        padding: 10,
        maxHeight: 300,
    },
    option: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    optionText: {
        fontSize: 16,
        color: colors.text,
    },
});
