import { firebaseApp } from "./firebase";
import * as firebase from 'firebase' 
import 'firebase/firestore'
//el paquete firebase 9.4.1 no funciona para estar parte instale firebase 8.3.1 en lo que veo como se
//resuelve ese error de paquete de hay en fuera todo es actual en cuanto a paquetes
import auth from '@react-native-firebase/auth';
import { GoogleSignin} from '@react-native-google-signin/google-signin';
const db = firebase.firestore(firebaseApp)
/*
el metodo is UserLogged debe ser async

export const isUserLogged = async () => {
    let isLogged = false;
    await firebase.auth().onAuthStateChanged((user) => {
        if(user !== null) { 
            isLogged = true;
        }
    });
    return isLogged;
};
*/
//con esta funcion verificamos si existe un usuario logeado o no algo falla
export const isUserLogged = async() =>{
    let isLogged = false
   await firebase.auth().onAuthStateChanged((user) => {
       user !== null && (isLogged = true)
    })
    return isLogged
}
//esta funcion si funciona bien
export const getCurrentUser = () => {
    return firebase.auth().currentUser;
}


//esta funcion es para la navegacion de google 
export const getCurrentUserGoogle = () => {
    return auth().currentUser;
}

//funcion que nos sirve para cerrar la sesion
export const closeSession = () => {
    return firebase.auth().signOut()
 // return auth().signOut()
}

export const closeSession2 = async() => {
    try{
    await GoogleSignin.revokeAccess()
    await auth().signOut()
    }catch(error){
      console.log(error)
    }

  }


//esta funcion nos permite registrar desde firebase al menos la contraseña es de 6 caracteres y un email valido
export const registerUserFirebase = async(email, password) => {
    const result = { statusResponse: true, error: null} //asumimos que no hubo errores
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password) //asi es como creamos el registro desde firebase
    } catch (error) {
        statusResponse = false
        result.error("este correo ya ha sido registrado.")
    }
    return result
}

//funcion para iniciar sesion con login y password en firebase
export const loginWithEmailAndPassword = async(email, password) => {
    //const result = Promise.resolve();
    const result = { statusResponse: true, error: null} //asumimos que no hubo errores
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password) //asi es como creamos el registro desde firebase
    } catch (error) {
        statusResponse = false
        result.error("el correo o la contraseña incorrectos.")
    }
    return result
}

