import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetModal } from '@gorhom/bottom-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "@/src/styles/colors";
import CustomPicker from "@/src/components/CustomPicker";

interface TaskBottomSheetProps {
    sheetRef: React.RefObject<BottomSheet>;
    isSheetOpen: boolean;
    setIsSheetOpen: (isOpen: boolean) => void;
    closeSheet: () => void;
    addTask: (task: string, participant: string, room: string) => void;
}

export default function TaskBottomSheet({ sheetRef, isSheetOpen, setIsSheetOpen, closeSheet, addTask }: TaskBottomSheetProps) {
    const [task, setTask] = useState('');
    const snapPoints = ['70'];
    const [selectedParticipant, setSelectedParticipant] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('');

    const participants = ['Juan', 'Ana', 'Pedro', 'Luis']; // Lista de participantes
    const rooms = ['Sala', 'Cocina', 'Baño', 'Habitación']; // Lista de habitaciones
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);


    const handleSave = () => {
        if (task.trim() && selectedParticipant && selectedRoom) {
            addTask(task, selectedParticipant, selectedRoom);
            setTask('');
            setSelectedParticipant('');
            setSelectedRoom('');
            closeSheet();
        }
    };

    return (
        <>
            {isSheetOpen && (
                <TouchableWithoutFeedback onPress={(closeSheet)}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}

            <BottomSheetModal
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                onClose={closeSheet}
                backgroundComponent={({ style }) => <View style={[style, styles.sheetContainer]} />}
                handleIndicatorStyle={{ backgroundColor: '#F9F5EA' }}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text style={styles.title}>Añadir Tarea</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Escribe una nueva tarea..."
                        placeholderTextColor="#ccc"
                        value={task}
                        onChangeText={setTask}
                    />
                    <View style={styles.selectContainer}>
                        <Text style={styles.label}>Compañero</Text>
                        <CustomPicker
                            options={participants}
                            selectedValue={selectedParticipant}
                            onSelect={setSelectedParticipant}
                        />
                    </View>
                    <View style={styles.selectContainer}>
                        <Text style={styles.label}>Habitacion</Text>
                        <CustomPicker
                            options={rooms}
                            selectedValue={selectedRoom}
                            onSelect={setSelectedRoom}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closeSheet}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
                            <Text style={styles.buttonText}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    pickerWrapper: {
        flex: 1,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },

    picker: {
        height: 40,
        width: '100%',
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    sheetContainer: {
        padding: 20,
        backgroundColor: colors.background,
        borderRadius: 12,
    },
    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F9F5EA',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F9F5EA',
        marginBottom: 5,
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#ff4d4d',
    },
    saveButton: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C1C1E', // Color similar al de la imagen
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    selectText: {
        fontSize: 16,
        color: '#00A896', // Color turquesa (como en la imagen)
        fontWeight: 'bold',
    },
    dateButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        fontSize: 16,
        color: '#333',
    },

});
