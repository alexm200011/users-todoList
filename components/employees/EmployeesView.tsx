import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import EmployeeCard from './EmployeeCard';
import { User } from '../../types/User';
import { FlatList } from 'react-native-gesture-handler';

//service


const EmployeesView = () => {

    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
      fetch("https://jsonplaceholder.org/users")
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
    
    return (
    <View style={styles.container} >
        {
            users?.length ? (
                <FlatList
                ItemSeparatorComponent={() => <View style = {styles.separator}/>}
                data={users.slice(0,5)}
                keyExtractor={user => user.id.toString()}
                renderItem={({item}) => (
                    <EmployeeCard
                    bs={item.company.bs}
                    name={`${item.firstname}  ${item.lastname}`}
                    username={item.login.username}/>
                )}
                />

            ) : (
                <Text> No hay usuarios</Text>
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
    }
  });

export default EmployeesView
