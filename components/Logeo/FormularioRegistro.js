import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from '@rneui/base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function FormularioRegistrofnbgb() {
    const[showPassword, setshowPassword] = useState(false)

  return (
    <View style={styles.estiloFormulario}>
     <Input containerStyle={styles.input} placeholder='ingresa tu email'/>
     <Input containerStyle={styles.input} passwor={true} secureTextEntry={!showPassword} 
     rightIcon={<MaterialCommunityIcons
                    name={ showPassword ? "eye-off-outline" : "eye-outline"}
                    color="#5564eb"
                    size={22}
                    onPress={() => setshowPassword(!showPassword)}
                        />} placeholder='ingresa tu contraseña'/>
     <Input containerStyle={styles.input} passwor={true} secureTextEntry={!showPassword}
     rightIcon={<MaterialCommunityIcons
        name={ showPassword ? "eye-off-outline" : "eye-outline"}
        color="#5564eb"
        size={22}
        onPress={() => setshowPassword(!showPassword)}
            />} placeholder='confirma tu contraseña'/>
    <Button title='Registrar nuevo usuario' containerStyle={styles.btnContainer} buttonStyle={styles.btn}/>
    </View>
  )
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