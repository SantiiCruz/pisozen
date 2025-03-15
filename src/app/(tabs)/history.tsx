import React, { useState } from "react";
import { View, ScrollView, Text, FlatList, StyleSheet } from "react-native";
import PieChart from "react-native-pie-chart";
import { initialTasks } from "@/src/data/tasks";
import { Task } from "@/src/types/task";
import { TaskCard } from "@/src/components/TaskCard";
import AnimatedHeader from "@/src/components/AnimatedHeader";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { colors } from '@/src/styles/colors';
import { globalStyles } from "@/src/styles/globalStyles";


const TaskHistory = () => {

  const scrollY = useSharedValue(0);

  const handleScroll = (event) => {
    scrollY.value = withTiming(event.nativeEvent.contentOffset.y, { duration: 200 });
  };

  const [completedTasks, setCompletedTasks] = useState<Task[]>(
    initialTasks.filter((task) => task.status === "completed")
  );

  const totalTasks = completedTasks.length;
  const taskCountByUser = completedTasks.reduce((acc, task) => {
    acc[task.assignedTo.name] = (acc[task.assignedTo.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartLabels = Object.keys(taskCountByUser);
  const chartData = chartLabels.map((name, index) => ({
    value: (taskCountByUser[name] / totalTasks) * 100, // Convertir a porcentaje
    color: ["#4BC0C0", "#FFCE56", "#36A2EB", "#FF6384"][index % 4],
  }));

  return (
    <View style={{ flex: 1 }}>
      <AnimatedHeader scrollY={scrollY} title="Historial" />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={globalStyles.container}>

        <Text style={styles.title}>¿Quién limpia mas?</Text>
        <View style={styles.chartWrapper}>
          <View style={styles.chartContainer}>
            <PieChart
              widthAndHeight={150}
              series={chartData}
              cover={0.6} 
            />
          </View>
          <View style={styles.legendContainer}>
            {chartLabels.map((name, index) => (
              <View key={index} style={styles.labelContainer}>
                <View style={[styles.colorDot, { backgroundColor: chartData[index].color }]} />
                <Text style={styles.labelText}>{name}: {chartData[index].value.toFixed(1)}%</Text>
              </View>
            ))}
          </View>
        </View>
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TaskCard task={item} />}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default TaskHistory;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: colors.text,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  chartWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  chartContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  legendContainer: {
    marginLeft: 20,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  labelText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
  },
});
