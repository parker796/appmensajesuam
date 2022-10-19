import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Cuenta from '../screens/Logeo/Cuenta'
import Login from '../screens/Logeo/Login'


const Stack = createStackNavigator()
/*habilitamos la opcion de navegacion hacia el login*/
export default function CuentaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cuentaStack" component={Cuenta} options={{title: ""}} />
      <Stack.Screen name="login" component={Login} options={{title: "Iniciar sesion"}} />
      </Stack.Navigator>
      
      
      
  )
}