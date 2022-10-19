import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
//esto es para la ventana del login
import {useNavigation} from '@react-navigation/native'


export default function UsuarioInvitado() {
  const navigation = useNavigation() //habilitados para viajar hacia otra pantalla
//debe de conincidir el nombre en la cuentaStack en name con el que ponemos en el onPress
  return (
    <ScrollView centerContent style={styles.viewBody}>
      <Image source={require("../../assets/LogoUam.jpg")}
             resizeMode="contain"
             style={styles.image} />
               <Text style={styles.title}>Consultar mensajes en tu perfil</Text>
               <Button buttonStyle={styles.boton} title="Ver tu perfil" onPress={() => navigation.navigate("login")}/>  
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