import { StyleSheet, Image } from 'react-native'
import React from 'react'
import FormularioRegistro from '../../components/Logeo/FormularioRegistro'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //esta libreria nos permite que no se nos oculte el boton cuando nos registremos
export default function Registrate() {
  return (
    <KeyboardAwareScrollView >
         <Image
        source={require("../../assets/LogoUam.jpg")} resizeMode="contain" style={styles.image}
        />
      <FormularioRegistro/>
    </KeyboardAwareScrollView >
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
    },
    image:{
        width:"100%",
        height:270,
        marginBottom:20
    }
})