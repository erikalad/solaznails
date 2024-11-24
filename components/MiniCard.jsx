import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const MiniCard = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
       <View style={styles.containerIcon}>{icon}</View>
       <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width:80,
    height:120,
    justifyContent:"center",
    alignItems:"center",
    marginRight:10
  },
  containerIcon:{
    backgroundColor:"#d65b88",
    borderRadius:15,
    width:60,
    height:60,
    justifyContent:"center",
    alignItems:"center"
  },
  texto:{
    marginTop:10,
    textAlign:"center",
    color:"#c61665"
  }
})

export default MiniCard