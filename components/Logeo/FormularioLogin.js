import { StyleSheet, View, Text, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Button, Input } from '@rneui/base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {validateEmail} from '../../utils/helpers'
import { size } from 'lodash';

import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'
import {loginWithEmailAndPassword} from "../../utils/actions"
//la importacion de expo google signin quedo obsoleta y ahora se maneja de esta manera
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import 'expo-dev-client';
import auth from '@react-native-firebase/auth';

export default function FormularioLogin() {

    const[showPassword, setshowPassword] = useState(false) //este useState lo utilizo para mostrar u ocultar contraseña
    const[formData, setformData] = useState(defaultFormValues()) //este guarda en un estado todos los datos del formulario
    const[errorEmail, seterrorEmail] = useState("")
    const[errorPassword, seterrorPassword] = useState("")
    const[loading, setLoading] = useState(false)

    const navigation = useNavigation() //cuidado aqui viene de la libreria @react-navigation/native porque hay dos

    
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
       /* 1. Navigate to the Details route with params */
      navigation.navigate("cuentaStack", {
        nombre: user.displayName,
        foto: user.photoURL,
        email: user.email
      } )
    })
    .catch((error) => {
      console.log(error)
    })

    
  }
  
  //este fragmento de codigo no los llevamos a actions.js
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
    //funcion que almacena los cambios de datos en los estados
    const onChange = (e,type) => {
        setformData({... formData, [type]: e.nativeEvent.text}) //sin el corchete el type no es dinamico el json
       
    }
    //funcion del login
    const login = async() => {
        //console.log("funcion login")
        if(!validateData()){
            return
        }

        setLoading(true)
        const result = await loginWithEmailAndPassword(formData.email, formData.password)
        setLoading(false)

        if(!result.statusResponse){
            seterrorEmail(result.error)
            seterrorPassword(result.error)
            return
        }

        navigation.navigate("cuentaStack")
    }

    const validateData = () => {
        seterrorEmail("")
        seterrorPassword("")
        let isValid = true

        if(!validateEmail(formData.email)){
            seterrorEmail("debes de ingresar un email valido")
            isValid = false
        }
        if(size(formData.password) < 6 ){
            seterrorPassword("debes de ingresar una contraseña al menos de 6 caracteres")
            isValid = false
        }

        return isValid
    }
    
  return (
        <View style={styles.container}>
            <Input containerStyle={styles.input} placeholder='ingresa tu email'
                onChange={(e) => onChange(e, "email")}
                keyboardType="email-address"
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
        
        <Input containerStyle={styles.input} passwor={true} secureTextEntry={!showPassword} 
            onChange={(e) => onChange(e, "password")}
            errorMessage={errorPassword}
            defaultValue={formData.password}
            rightIcon={<MaterialCommunityIcons
                    name={ showPassword ? "eye-off-outline" : "eye-outline"}
                    color="#5564eb"
                    size={22}
                    onPress={() => setshowPassword(!showPassword)}
                        />} placeholder='ingresa tu contraseña'/>

        <Button title='Iniciar sesion' containerStyle={styles.btnContainer} buttonStyle={styles.btn}
                    onPress = {() => login() /*console.log(formData)}*/}/>
         <GoogleSigninButton
                    style={{ width: 325, height: 55 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress= {onGoogleButtonPress}/*{ () => console.log("hola") } */ />
    
        <Loading isVisible={loading} text="Iniciando sesion..."/>

            </View>
        )  //icon es de native element
    }//fin del if para user
    return(
        <View style={styles.container}>
          
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
//esta funcion nos permite llamarla varias veces en el estado del formulario hubo un error porque no se encontro la ponemos al final
const defaultFormValues = () => {
    return { email: "", password: ""}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:30
    },
    estiloFormulario: {
        marginTop:30
    },
    input: {
        width: "100%"
    },
    btnContainer: {
        marginTop: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn:{
        backgroundColor:"#5564eb"
    },
})