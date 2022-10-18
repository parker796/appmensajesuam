import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Cuenta from '../screens/Logeo/Cuenta'


const Stack = createStackNavigator()

export default function CuentaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cuentaStack" component={Cuenta} options={{title: "Cuenta"}} />
      </Stack.Navigator>
  )
}