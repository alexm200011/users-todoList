import React, { useState } from 'react'
import { View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { Task } from '../../types/Task';
import ToDoListCard from './ToDoListCard';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native';
const initialTasks: Task[] = [
    {
      id: 1,
      title: "Crear una aplicación web",
      detail: "Desarrollar una aplicación web utilizando React y TypeScript.",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Preparar una presentación",
      detail: "Preparar una presentación sobre TypeScript y sus ventajas.",
      status: "To Do"
    },
    {
      id: 3,
      title: "Publicar el código en GitHub",
      detail: "Subir el código fuente de la aplicación a un repositorio en GitHub.",
      status: "Done"
    }
  ];

const ToDoListView = () => {
  
  const [tasksList, setTasksList] = useState<Task[]>(initialTasks) 

  // Funciones para agregar tareas
  const addTask = (task: Task) => {
    setTasksList(prev => [...prev, task])
  }

  // Funciones para eliminar tareas
  const deleteTask = (id: number) => {
    setTasksList(prev => prev.filter(e => e.id !== id))
  }

  // Funciones para actualizar tareas
  const updateTask = (task:Task) => {
    setTasksList(prev => {
        const updatedTasks = prev.map(e => e.id === task.id ? task : e)
        return updatedTasks
    })
  }
  
    return (
        <View style={styles.container} >
        <View style={styles.button}>
        <Button
        title="Agregar"
        onPress={() => {
            const newTask : Task = {
                id: 4,
                title: "CI/CD",
                detail: "Escanear con jenkins por vulnerabilidades, resolverlas y actualizar codigo.",
                status: "In Progress"
            }
            addTask(newTask);
        }}
        
          />
        </View>


        {
           tasksList?.length ? (
                <FlatList
                ItemSeparatorComponent={() => <View style = {styles.separator}/>}
                data={tasksList}
                keyExtractor={task => task.id.toString()}
                renderItem={({item}) => (
                    <ToDoListCard
                        id={item.id}
                        title={item.title}
                        status={item.status}
                        detail={item.detail}
                    />
                )}
                />
            ) : (
                <Text> No hay tareas</Text>
            )
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator :{
        height:12
    },
    button: {
        width: 120, 
        borderRadius: 10, 
        paddingVertical: 8, 
        alignContent:'center',
        alignSelf:'center'
      },
  });



export default ToDoListView
