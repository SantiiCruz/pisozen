import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";
import { globalStyles } from "@/src/styles/globalStyles";


export type TaskStatus = "pending" | "in-progress" | "completed";

export type Task = {
    id: string;
    title: string;
    description: string;
    room: string;
    status: TaskStatus;
    assignedTo: {
        id: string;
        name: string;
        photoUrl?: string;
    };
    dueDate: string;
};

interface TaskCardProps {
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onSwapRequest?: (taskId: string) => void;
}

// Componente para mostrar el icono y nombre del estado
const StatusIcon: React.FC<{ status: TaskStatus }> = ({ status }) => {
    const statusInfo = {
        pending: { icon: "schedule", color: "#FFCC00", label: "Pendiente" },
        "in-progress": { icon: "autorenew", color: "#007BFF", label: "En progreso" },
        completed: { icon: "check-circle", color: "#28A745", label: "Completado" },
    };

    const { icon, color, label } = statusInfo[status];

    return (
        <View style={[styles.badge, { backgroundColor: color + "20" }]}>
            <MaterialIcons name={icon} size={18} color={color} />
            <Text style={[styles.statusText, { color }]}>{label}</Text>
        </View>
    );
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onSwapRequest }) => {
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                {/* Status icon with label */}
                <StatusIcon status={task.status} />
                <View style={styles.badge}>
                    <Text style={styles.subtitle}>{task.room}</Text>
                </View>
            </View>

            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>

            <View style={styles.userInfo}>
                <Image source={{ uri: task.assignedTo.photoUrl }} style={styles.avatar} />
                <View>
                    <Text style={styles.userName}>{task.assignedTo.name}</Text>
                    <Text style={styles.date}>Due: {formatDate(task.dueDate)}</Text>
                </View>
            </View>

            <View style={styles.actions}>
                {task.status !== "completed" ? (
                    <>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonPrimary]}
                            onPress={() => onStatusChange(task.id, "completed")}
                        >
                            <MaterialIcons style={styles.buttonIcon} name="check" size={18} color="white" />
                            <Text style={styles.buttonText}>Done</Text>
                        </TouchableOpacity>

                        {/* {task.status === "pending" && (
                            <TouchableOpacity
                                style={[styles.button, styles.buttonSecondary]}
                                onPress={() => onStatusChange(task.id, "in-progress")}
                            >
                                <Text style={styles.buttonText}>Start</Text>
                            </TouchableOpacity>
                        )} */}

                        <TouchableOpacity style={styles.button} onPress={() => onSwapRequest?.(task.id)}>
                            <Text style={styles.buttonText}>Swap</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <Text style={styles.date}>Completed on {formatDate(task.dueDate)}</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(139, 158, 162, 0.5)",
        padding: 20,
        marginVertical: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    badge: {
        backgroundColor: "#E0E0E0",
        flexDirection: "row",
        alignItems: "center",
        padding: 6,
        borderRadius: 5,
    },
    statusText: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: "bold",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.text,
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
    },
    description: {
        fontSize: 14,
        color: colors.text,
        marginVertical: 12,
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.text,
    },
    date: {
        fontSize: 13,
        color: colors.border,

    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", // Centra el contenido
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.border,
        minWidth: 90,
        marginHorizontal: 6,
    },
    buttonPrimary: {
        backgroundColor: colors.secondary,
    },
    buttonText: {
        fontSize: 14,
        color: colors.text,
    },
    buttonIcon: {
        marginRight: 6,
    },
});
