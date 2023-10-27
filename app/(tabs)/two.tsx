import { View,Text, StyleSheet } from 'react-native'
import ToDoListView from '../../components/todolist/ToDoListView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To do list</Text>
      <ToDoListView/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:16,
    gap:16,
    flex: 1,
    display:'flex',
    flexDirection:'column'
  },
  title: {
    alignSelf:"center",
    fontSize: 20,
    fontWeight: 'bold',
  },
});
