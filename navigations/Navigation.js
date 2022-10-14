import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//import DatosGenerales from '../screens/DatosGenerales'
//import Perfil from '../screens/Perfil'
import DatosGeneralesStack from './DatosGeneralesStack'
import PerfilStack from './PerfilStack'
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator()

export default function Navigation() {
   // console.log({ } );
   //funcion que nos pinta los iconos y la ruta hacia donde va la navegacion
    const screenOptions = (route, color) => {
      let icoName
      switch (route.name) {
        case "datosGenerales":
          icoName = "home"
          break
        case "perfil":
          icoName = "home"
          break
    }//fin de switch
    return(
      <Icon type="MaterialCommunityIcons" name = {icoName} size={22} color={color}/>
    )
  }//fin de la funcion
  return (//initialRouteName nos permite ver en donde se va parar nuestro componente activo en el tab
   <NavigationContainer>
        <Tab.Navigator
            initialRouteName="datosGenerales"
            //tabBarOptions ya fue migrada a screenOptions
            tabBarOptions={{
              activeTintColor: '#ed3226',
              inactiveTintColor: '#040404',
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => screenOptions(route, color)
            })}  
            > 
            <Tab.Screen name="datosGenerales" component={DatosGeneralesStack} options={{title: "Buzon de entrada"}} ></Tab.Screen>
            <Tab.Screen name="perfil" component={PerfilStack} options={{title: "Perfil"}}></Tab.Screen>
        </Tab.Navigator>
   </NavigationContainer>
  )
}