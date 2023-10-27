import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

type EmployeeCardProps = {
    name:string,
    username:string,
    bs:string,
}

const EmployeeCard = ({name,username,bs}:EmployeeCardProps) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Ionicons name="person" size={48} color="blue" />
        <Text>{username}</Text>
        <View style={styles.labelView}>
            <Text>{bs}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        gap:8,
        display:'flex',
        flexDirection:'column',
        padding:12,
        borderRadius:15,
        borderColor:'black',
        borderWidth:1,
        alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    labelView:{
        paddingHorizontal:16,
        paddingVertical:8,
        backgroundColor:"cyan",
        borderColor:"blue",
        borderRadius:6,
        borderWidth:1,
        display:"flex",
        justifyContent:"center",
    }
  });

export default EmployeeCard
