import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//import DatosGenerales from '../screens/DatosGenerales'
//import Perfil from '../screens/Perfil'
import DatosGeneralesStack from './DatosGeneralesStack'
import PerfilStack from './PerfilStack'
const Tab = createBottomTabNavigator()

export default function Navigation() {
   // console.log({ } );
    
  return (
   <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="datosGenerales" component={DatosGeneralesStack} options={{title: "DatosGenerales"}} ></Tab.Screen>
            <Tab.Screen name="perfil" component={PerfilStack} options={{title: "Perfil"}}></Tab.Screen>
        </Tab.Navigator>
   </NavigationContainer>
  )
}