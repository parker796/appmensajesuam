import { StyleSheet, Text, View, Image  } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/base'
import { useNavigation} from "@react-navigation/native"
import FormularioLogin from '../../components/Logeo/FormularioLogin'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //esta libreria nos permite que no se nos oculte el boton cuando nos registremos
export default function Login() {
    

  return (
    //sustituimos el scrowview por el keyboardscrollview
    <KeyboardAwareScrollView >
        <Image
        source={require("../../assets/LogoUam.jpg")} resizeMode="contain" style={styles.image}
        />
        <View style={styles.cointaner}>
            <FormularioLogin/>
            <CrearCuenta/>
        </View>
        <Divider style={styles.divider}/>
    </KeyboardAwareScrollView >
    
  )
}
//los componentes inicia con mayuscula
function CrearCuenta(props){
    const navigation = useNavigation()
    return(
        <Text style={styles.register} onPress={() => navigation.navigate("registrate")}>
            Aun no tienes una cuenta?{" "}
            <Text style={styles.btnRegister}>Registrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:270,
        marginBottom:20
    },
    cointaner:{
        marginHorizontal:40
    },
    divider:{
        backgroundColor: "#5564eb",
        margin:40
    },
    register:{
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnRegister:{
        color:"#5564eb",
        fontWeight: 'bold'
    }
})