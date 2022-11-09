import { StyleSheet, View, Text} from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { getCurrentUser, getCurrentUserGoogle, isUserLogged} from '../../utils/actions'
import UsuarioLogeado from './UsuarioLogeado'
import UsuarioInvitado from './UsuarioInvitado'
import Loading from '../../components/Loading'
import { useFocusEffect } from '@react-navigation/native'

//import firebase from 'firebase/app'
export default function Cuenta({route}) {
  const [login, setLogin] = useState(null)
  const [loginGoogle, setloginGoogle] = useState(null)

 
  /* 2. Get the param */
  const { nombre, foto, email } = route.params;
  
 // const currentUser = getCurrentUser();

/*  firebase.auth().onAuthStateChanged((user) => {
    user !== null ? (setLogin(false)) : setLogin(true) 
 }) //con esto funciona */
 useFocusEffect(//cada vez que pase por aca verifica si es logeado o no entonces aqui con esta funcion se refresca
  useCallback(() => {
      const user = getCurrentUser()
      const user2 = getCurrentUserGoogle()
      user2 ? setloginGoogle(true) : setloginGoogle(false)
      user ? setLogin(true) : setLogin(false)
      //esta funcion a la primera de arranque no funciona y no refresca la pantalla cuando cierras sesion
    //  setLogin[isUserLogged()] //isUserLogged nos sirve para verificar si hay un usuario logeado o no
}, [])
 )
//en la primera se toma pero en las demas ya no se actualiza el useEffect
 /*useEffect(() => {
          const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false)
         //   setLogin[isUserLogged()]
    }, [])*/

  //no se alcanza a ver el loading porque pasa muy rapido el if  lo comentamos y ya se queda ahi el overlay
  if(login == null){
    //return <Text>Cargando...</Text>
   // return <Loading isVisible={true} text="Cargando..."/>
  }
   if(login == true) {
      return login ? <UsuarioLogeado/> : <UsuarioInvitado/> 
   }else{
    
   if(loginGoogle){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Detalles de la pantalla</Text>
    <Text>nombre: {JSON.stringify(nombre)}</Text>
    <Text>email: {JSON.stringify(email)}</Text>
    <UsuarioLogeado/>
    </View>
    )
   }else{
      return  <UsuarioInvitado/> }
   }
      
     // return <Text>hola cuenta</Text>
}

const styles = StyleSheet.create({})