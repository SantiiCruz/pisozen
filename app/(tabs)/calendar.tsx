import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import Ionicons from "@expo/vector-icons/Ionicons";
import Toast from "react-native-toast-message";
import { Task, TaskCard } from "@/components/TaskCard";

const initialTasks: Task[] = [
    {
        id: "1",
        title: "Clean kitchen",
        description: "Wash dishes, clean countertops, and sweep the floor.",
        room: "Kitchen",
        status: "pending",
        assignedTo: { id: "1", name: "Peter Parker", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg" },
        dueDate: "2025-03-10",
    },
    {
        id: "2",
        title: "Vacuum living room",
        description: "Vacuum the carpet and clean the coffee table.",
        room: "Living Room",
        status: "completed",
        assignedTo: { id: "2", name: "John Doe", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg" },
        dueDate: "2025-03-10",
    },
];

const CalendarPage = ({ navigation }: { navigation: any }) => {
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    // Filtrar tareas según la fecha seleccionada
    const selectedDateTasks = tasks.filter((task) => task.dueDate === selectedDate);

    return (
        <View style={styles.container}>
            {/* Encabezado */}
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Ionicons name="calendar" size={24} color="white" />
                    <Text style={styles.headerText}>Calendar</Text>
                </View>

                {/* Botón Mejorado */}
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddTask")}>
                    <Ionicons name="add-circle-outline" size={24} color="white" />
                    <Text style={styles.addButtonText}>Add Task</Text>
                </TouchableOpacity>
            </View>

            {/* Calendario */}
            <Calendar
                markedDates={{
                    [selectedDate]: { selected: true, marked: true, selectedColor: "#007AFF" },
                }}
                onDayPress={(day) => setSelectedDate(day.dateString)}
            />

            {/* Lista de tareas */}
            <Text style={styles.taskHeader}>Tasks for {selectedDate}</Text>

            {selectedDateTasks.length > 0 ? (
                <FlatList
                    data={selectedDateTasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <TaskCard task={item} />}
                />
            ) : (
                <Text style={styles.noTaskText}>No tasks for this date</Text>
            )}

            {/* Toast Messages */}
            <Toast />
        </View>
    );
};

export default CalendarPage;

// Estilos mejorados
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 16,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#007AFF",
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
    },
    headerTitle: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#005BBB",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    addButtonText: {
        color: "white",
        fontSize: 16,
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
});
