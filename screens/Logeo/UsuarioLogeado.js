import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loading from '../../components/Loading'

export default function UsuarioLogeado() {
  return (
    <View>
      <Text>UsuarioLogeado</Text>
      <Loading isVisible={true} text="Cargando..."/>
    </View>
  )
}

const styles = StyleSheet.create({})