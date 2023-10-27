import { View,Text, StyleSheet } from 'react-native'
import EmployeesView from '../../components/employees/EmployeesView';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabOneScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Jsonplaceholder Employees List</Text>
        <EmployeesView/>
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
