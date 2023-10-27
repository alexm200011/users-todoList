import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


type TodoListCardProps = {
    id:number,
    title:string,
    detail:string,
    status:string,
}

const ToDoListCard = ({title,detail,status,id}:TodoListCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.title}>{title}</Text>
        <Text>{detail}</Text>
        <View style={styles.labelView}>
          <Text>{status}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        {/* Aquí puedes agregar los iconos */}
        <Ionicons name="pencil" size={48} color="yellow" />
        <Ionicons name="trash" size={48} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    gap: 8,
    padding: 12,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
  leftContent: {
    flex: 1, 
  },
  rightContent: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'cyan',
    borderColor: 'blue',
    borderRadius: 6,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default ToDoListCard;
