import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button } from '@rneui/base'//utilizamos el boton de react native elements porque es mas poderoso que el que viene en native
import { useNavigation } from '@react-navigation/native'
import { closeSession } from '../../utils/actions'
import Loading from '../../components/Loading'
export default function UsuarioLogeado() {
  const navigation = useNavigation()
  const[loading, setLoading] = useState(false)
  return (
    /*
    <View>
      <Text>UsuarioLogeado</Text>
      /*
      <Loading isVisible={true} text="Cargando..."/>
      
    </View>
    */
    <View>
    <Text>UsuarioLogeado</Text>
    <Button title="Cerrar sesion" onPress={() => {
        setLoading(true)
        closeSession() //en este igual puede demorar unos segundos ponemos un Loading
        setLoading(false)
        navigation.navigate("login")
    }}/>
    <Loading isVisible={loading} text="Creando cuenta..."/>
    </View>
  )
}

const styles = StyleSheet.create({})