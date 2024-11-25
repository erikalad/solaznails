import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Back from './../assets/icons/back.svg'
import { useNavigation } from 'expo-router'

const Nav = ({name}) => {
  const navigation = useNavigation()

  const back = () => {
    navigation.navigate('init')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}>
     <Back width={18} height={18} color={'black'}/>
     </TouchableOpacity>
     <Text style={styles.name}>{name}</Text>
     <View style={styles.space}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection:"row",
      justifyContent:"space-between",
      marginBottom:20
    },
    name:{
      marginHorizontal:20,
      fontSize:15,
       fontFamily:Platform.OS === 'ios' ? 'montserrat' : 'montserrat-blond'
    },
    space:{
      width:20,
      height:20
    }

})

export default Nav