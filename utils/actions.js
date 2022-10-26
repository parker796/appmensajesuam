import { firebaseApp } from "./firebase";
import * as firebase from 'firebase' 
import 'firebase/firestore'
//el paquete firebase 9.4.1 no funciona para estar parte instale firebase 8.3.1 en lo que veo como se
//resuelve ese error de paquete de hay en fuera todo es actual en cuanto a paquetes

const db = firebase.firestore(firebaseApp)

export const isUserLogged = () =>{
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) => {
       user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser;
}

export const closeSession = () => {
    return firebase.auth().signOut()
}
//esta funcion nos permite registrar desde firebase al menos la contraseña es de 6 caracteres y un email valido
export const registerUserFirebase = async(email, password) => {
    const result = { statusResponse: true, error: null} //asumimos que no hubo errores
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password) //asi es como creamos el registro desde firebase
    } catch (error) {
        result.error("este correo ya ha sido registrado")
    }
    return result
}