import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getCurrentUser, isUserLogged } from '../../utils/actions'
import UsuarioLogeado from './UsuarioLogeado'
import UsuarioInvitado from './UsuarioInvitado'
import Loading from '../../components/Loading'
//import firebase from 'firebase/app'
export default function Cuenta() {
  const [login, setLogin] = useState(null)
  const currentUser = getCurrentUser();

/*  firebase.auth().onAuthStateChanged((user) => {
    user !== null ? (setLogin(false)) : setLogin(true) 
 }) //con esto funciona */

 useEffect(() => {
          const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false)
    }, [])

  //no se alcanza a ver el loading porque pasa muy rapido el if  lo comentamos y ya se queda ahi el overlay
  if(login == null){
    //return <Text>Cargando...</Text>
    return <Loading isVisible={true} text="Cargando..."/>
  }
      return login ? <UsuarioLogeado/> : <UsuarioInvitado/>
     // return <Text>hola cuenta</Text>
}

const styles = StyleSheet.create({})