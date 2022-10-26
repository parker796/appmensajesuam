import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from '@rneui/base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {validateEmail} from '../../utils/helpers'
import { size } from 'lodash';
import { useNavigation } from '@react-navigation/native'
import {registerUserFirebase} from "../../utils/actions"

//const navigation = useNavigation() //este no se pone aqui si no en la parte de la aplicacion

export default function FormularioRegistrofnbgb() {
    const[showPassword, setshowPassword] = useState(false) //este useState lo utilizo para mostrar u ocultar contraseña
    const[formData, setformData] = useState(defaultFormValues()) //este guarda en un estado todos los datos del formulario
    const[errorEmail, seterrorEmail] = useState("")
    const[errorPassword, seterrorPassword] = useState("")
    const[errorConfirm,seterrorConfirm] = useState("")
    const[errorMatricula,seterrorMatricula] = useState("")

    const navigation = useNavigation()

    //funcion que almacena los cambios de datos en los estados
    const onChange = (e,type) => {
        setformData({... formData, [type]: e.nativeEvent.text}) //sin el corchete el type no es dinamico el json
       
    }//[emai]: evento que pusimos en el formulario lo que va escribiendo el usuario
    //este era una funcion normal sin el async pero como validamos de que todo salio bien ya se registra en firebase por eso es asincrona
    const registerUser = async() => {
        if(!validateData()){
            return
        }

        //console.log("vamos bien")
        const result = await registerUserFirebase(formData.email, formData.password)
        if(!result.statusResponse){
            seterrorEmail(result.error)
            return
        }

        navigation.navigate("cuentaStack") //si todo salio bien debemos de ir a la pantalla de cuenta

        //esta parte de la matricula lo checamos porque firebase solo nos registra email y contraseña no mas datos
    }

    const validateData = () => {
        seterrorConfirm("")
        seterrorEmail("")
        seterrorPassword("")
        seterrorMatricula("")
        let isValid = true

        if(!validateEmail(formData.email)){
            seterrorEmail("debes de ingresar un email valido")
            isValid = false
        }
        if(size(formData.password) < 6 ){
            seterrorPassword("debes de ingresar una contraseña al menos de 6 caracteres")
            isValid = false
        }
        if(size(formData.confirm) < 6 ){
            seterrorConfirm("debes de ingresar una confirmacion de contraseña al menos de 6 caracteres")
            isValid = false
        }
        if(formData.password !== formData.confirm){
            seterrorConfirm("las contraseñas no son iguales verifica que sean las mismas")
            seterrorPassword("las contraseñas no son iguales verifica que sean las mismas")
            isValid = false
        }
        if(size(formData.matricula) !== 10 ){
            seterrorMatricula("la matricula debe de tener 10 digitos ni mas ni menos")
            isValid = false
        }
        return isValid
    }
  return (
    <View style={styles.estiloFormulario}>   
     <Input containerStyle={styles.input} placeholder='ingresa tu email'
            onChange={(e) => onChange(e, "email")}
            keyboardType="email-address"
            errorMessage={errorEmail}
            defaultValue={formData.email}
            />
    <Input containerStyle={styles.input} placeholder='ingresa tu matricula'
            onChange={(e) => onChange(e, "matricula")}
            keyboardType="numeric"
            errorMessage={errorMatricula}
            defaultValue={formData.matricula}
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
     <Input containerStyle={styles.input} passwor={true} secureTextEntry={!showPassword}
     onChange={(e) => onChange(e, "confirm")}
     errorMessage={errorConfirm}
     defaultValue={formData.confirm}
     rightIcon={<MaterialCommunityIcons
        name={ showPassword ? "eye-off-outline" : "eye-outline"}
        color="#5564eb"
        size={22}
        onPress={() => setshowPassword(!showPassword)}
            />} placeholder='confirma tu contraseña'/>
    <Button title='Registrar nuevo usuario' containerStyle={styles.btnContainer} buttonStyle={styles.btn}
        onPress = {() => registerUser()/*console.log(formData)*/}/>
    </View>
  )
}
//esta funcion nos permite llamarla varias veces en el estado del formulario hubo un error porque no se encontro la ponemos al final
const defaultFormValues = () => {
    return { email: "", password: "", confirm: "", matricula: ""}
}

const styles = StyleSheet.create({
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