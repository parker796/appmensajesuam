import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

export default function UsuarioInvitado() {
  return (
    <ScrollView centerContent style={styles.viewBody}>
      <Image source={require("../../assets/LogoUam.jpg")}
             resizeMode="contain"
             style={styles.image} />
               <Text style={styles.title}>Consultar mensajes en tu perfil</Text>
               <Button buttonStyle={styles.boton} title="Ver tu perfil" onPress={() => console.log("hola")}/>  
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30
  },
  image: {
    width: "100%", //no es lo mismo el % que el numero en si
    height: 270,
    marginBottom:20,
    textAlign:"center"
  },
  title: {
    fontWeight: 'bold', //negrita la letra
    fontSize:19,
    marginVertical:10,
    textAlign:"center"
  },
  boton:{
    backgroundColor:"#5564eb"
  }
})