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
