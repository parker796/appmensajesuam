import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from '@rneui/base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {validateEmail} from '../../utils/helpers'
import { size } from 'lodash';
import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'
import {loginWithEmailAndPassword} from "../../utils/actions"

export default function FormularioLogin() {
    const[showPassword, setshowPassword] = useState(false) //este useState lo utilizo para mostrar u ocultar contraseña
    const[formData, setformData] = useState(defaultFormValues()) //este guarda en un estado todos los datos del formulario
    const[errorEmail, seterrorEmail] = useState("")
    const[errorPassword, seterrorPassword] = useState("")
    const[loading, setLoading] = useState(false)

    const navigation = useNavigation() //cuidado aqui viene de la libreria @react-navigation/native porque hay dos

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
         <Loading isVisible={loading} text="Iniciando sesion..."/>
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
    }

})