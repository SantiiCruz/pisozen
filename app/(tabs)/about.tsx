import { Text, View, StyleSheet } from 'react-native';
import { TaskCard, TaskStatus } from '@/components/TaskCard';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <TaskCard task={{
        id: '1',
        title: 'Task title',
        description: 'Task description',
        room: 'Room name',
        status: 'pending',
        assignedTo: {
          id: '1',
          name: 'John Doe',
          photoUrl: 'https://api.dicebear.com/9.x/pixel-art/svg',
        },
        dueDate: '2022-12-31T23:59:59.999Z',
      }} onStatusChange={function (taskId: string, newStatus: TaskStatus): void {
        throw new Error('Function not implemented.');
      } } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    padding: 16,
    
  },
  text: {
    color: '#fff',
  },
});
