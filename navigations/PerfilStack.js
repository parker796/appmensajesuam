import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Perfil from '../screens/Perfil'


const Stack = createStackNavigator()

export default function DatosGeneralesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="perfilStack" component={Perfil} options={{title: "Perfil"}} />
      </Stack.Navigator>
  )
}