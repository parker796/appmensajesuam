import React from 'react'
import Navigation from './navigations/Navigation'

export default function App() {
  return (
    <Navigation/>
  )
}

/*
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import 'expo-dev-client';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';
import Headers from './Headers';

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId: '477466719210-gl2dq4496odm5q3ct7hmg6u07dff9ghs.apps.googleusercontent.com',
  });

   // Handle user state changes
   function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }); //,[]

//asyn function onGoogleButtonPress
  const onGoogleButtonPress = async() => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential)
    user_sign_in.then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })

    
  }
  const signOut = async() => {
    try{
    await GoogleSignin.revokeAccess()
    await auth().signOut()
    }catch(error){
      console.log(error)
    }

  }

  if (initializing) return null;

    if(!user){
      return(
        <View style={styles.container}>
          <Headers />
          <GoogleSigninButton
          style={{width:300, height:65, Top: 300}}
            onPress={onGoogleButtonPress} />
          </View>
      )
    }
    return(
      <View style={styles.container}>
        <Headers />
           <View style={{marginTop:100, alignItems:'center'}}>
                <Text style={styles.text}>Bienvenido, { user.displayName }</Text>
                <Image source={{uri: user.photoURL}}
                       style={{height:300, width:300, borderRadius:150, margin:20}}
                />
                <Button title='cerrar sesion' onPress={signOut}/>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold'
  }
});
*/