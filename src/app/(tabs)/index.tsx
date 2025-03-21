import BottomSheet, { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Task, TaskCard } from "@/src/components/TaskCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useRef, useMemo, useCallback } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button,
} from "react-native";
import { useSharedValue, withTiming, } from "react-native-reanimated";
import { Calendar } from "react-native-calendars";
import Toast from "react-native-toast-message";
import { initialTasks } from "@/src/data/tasks";
import { ScrollView } from "react-native-gesture-handler";
import HomeBottomSheet from '@/src/components/HomeBottomSheet';
import NewTaskBottomSheet from '@/src/components/TaskBottomSheet';
import AnimatedHeader from "@/src/components/AnimatedHeader"; // Importa el nuevo componente
import { colors } from "@/src/styles/colors"; // Importa el archivo de colores
import { globalStyles } from "@/src/styles/globalStyles";

const CalendarPage = () => {
    const homeSheetRef = useRef<BottomSheetModal>(null);
    const taskSheetRef = useRef<BottomSheetModal>(null);

    const [isHomeSheetOpen, setIsHomeSheetOpen] = useState(false);
    const [isTaskSheetOpen, setIsTaskSheetOpen] = useState(false);

    const scrollY = useSharedValue(0);

    const openHomeSheet = () => {
        setIsHomeSheetOpen(true);
        homeSheetRef.current?.present();
    };

    const closeHomeSheet = () => {
        setIsHomeSheetOpen(false);
        homeSheetRef.current?.dismiss();
    };

    const openTaskSheet = () => {
        setIsTaskSheetOpen(true);
        taskSheetRef.current?.present();
    };

    const closeTaskSheet = () => {
        setIsTaskSheetOpen(false);
        taskSheetRef.current?.dismiss();
    };

    const handleScroll = (event) => {
        scrollY.value = withTiming(event.nativeEvent.contentOffset.y, { duration: 200 });
    };

    const [selectedDate, setSelectedDate] = useState<string>(
        new Date().toISOString().split("T")[0]
    );
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");

    const selectedDateTasks = tasks.filter((task) => task.dueDate === selectedDate);

    const addTask = () => {
        if (newTaskTitle.trim() === "") {
            Toast.show({ type: "error", text1: "Error", text2: "La tarea no puede estar vacía" });
            return;
        }

        const newTask: Task = {
            id: Math.random().toString(),
            title: newTaskTitle,
            dueDate: selectedDate,
        };

        setTasks([...tasks, newTask]);
        setNewTaskTitle("");
        closeTaskSheet();
        Toast.show({ type: "success", text1: "Éxito", text2: "Tarea agregada correctamente" });
    };

    return (
        <View style={{ flex: 1 }}>
            <AnimatedHeader scrollY={scrollY} title="Home" onPress={openHomeSheet} />

            <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={globalStyles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Mis tareas</Text>
                    <TouchableOpacity style={styles.addButton} onPress={openTaskSheet}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                        <Text style={styles.addButtonText}>Agregar</Text>
                    </TouchableOpacity>
                </View>

                <Calendar
                    markedDates={{
                        [selectedDate]: { selected: true, marked: true, selectedColor: colors.primary },
                    }}
                    onDayPress={(day) => setSelectedDate(day.dateString)}
                    style={{
                        borderRadius: 5,
                        marginBottom: 20,
                        elevation: 5,
                        borderWidth: 4,
                        borderColor: 'rgba(100, 100, 100, 0.2)'
                    }}
                    theme={{
                        calendarBackground: colors.background,
                        dayTextColor: '#fff',
                        textDisabledColor: '#444',
                        monthTextColor: '#888'
                    }}
                />

                {selectedDateTasks.length > 0 ? (
                    <FlatList
                        data={selectedDateTasks}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <TaskCard task={item} />}
                        scrollEnabled={false}
                    />
                ) : (
                    <Text style={styles.noTaskText}>No tasks for this date</Text>
                )}

                <Toast />
            </ScrollView>

            {/* BottomSheet para nueva tarea */}
            <NewTaskBottomSheet 
                sheetRef={taskSheetRef} 
                isSheetOpen={isTaskSheetOpen} 
                setIsSheetOpen={setIsTaskSheetOpen} 
                closeSheet={closeTaskSheet} 
                addTask={addTask} 
            />

            {/* BottomSheet para Home */}
            <HomeBottomSheet 
                sheetRef={homeSheetRef} 
                isSheetOpen={isHomeSheetOpen} 
                setIsSheetOpen={setIsHomeSheetOpen} 
                closeSheet={closeHomeSheet} 
            />
        </View>
    );
};

export default CalendarPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    addButtonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 6,
    },
    taskHeader: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
    },
    noTaskText: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 14,
        color: "#888",
    },
    bottomSheetContainer: {
        padding: 16,
        backgroundColor: "white",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    sheetTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
    },
});
