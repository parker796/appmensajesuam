import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import DatosGenerales from '../screens/DatosGenerales'


const Stack = createStackNavigator()

export default function DatosGeneralesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="datosGeneralesStack" component={DatosGenerales} options={{title: ""}} />
      </Stack.Navigator>
  )
}

