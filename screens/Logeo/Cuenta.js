import { StyleSheet, View, Text, Image, ScrollView} from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { getCurrentUser, getCurrentUserGoogle, isUserLogged} from '../../utils/actions'
import UsuarioLogeado from './UsuarioLogeado'
import UsuarioInvitado from './UsuarioInvitado'
import Loading from '../../components/Loading'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
//import { useLocation } from 'react-router-dom';//este es de react js
//import firebase from 'firebase/app'

export default function Cuenta({route}) {
  const [login, setLogin] = useState(null)
  const [loginGoogle, setloginGoogle] = useState(null)
  const [data, setData] = useState([]);
  const [matri, setMatri] = useState()
  let nomb, ema, fot, matricula;
  if(route.params == null){ //ponemos esta condicion porque hay momento de que react native hace el compilado conpleto
    route.params = null //nos manda un error para recuperar los parametros que vienen de navegacion porque precisamente vienen en null e inicialmente no se reconocen esos valores
   // console.log(route.params)
  }else{
          const { nombre, email, foto} = route.params;
          //console.log(nombre)
          console.log(email)
          //console.log(foto)
          nomb = nombre 
          ema = email
          fot = foto
          matricula = email.substring(2, 12)
          console.log(matricula)
          //como los valores ya estan completos se quedan asi como estan pero en esta parte necesitamos
          //que ya no existan los podriamos poner en null pero ya cuando los hayamos utilizado
         //consumimos el api de mi compañero hecha en php
          //URL: la URL de tu endpoint API
          //const matricula = email.substring(2, 12) //tendria que manejarlo en rango (9, 10) //digitos de la matricula
         
          //setMatri(email.substring(2, 12))
         
          //console.log(matricula)
      /*    function postData() { //para consumir api desde variables es con el commillado derecho si es simple con una ' basta
            const response =  fetch(`https://desarrollophp2.azc.uam.mx/appmensajes/apiAlumnos/index.php?matricula=${matricula}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
              }).then((response) => response.json())
            .then((responseJson) => {
              alert(JSON.stringify(responseJson));
              //console.log(typeof responseJson);
              setData(responseJson); //noes con result responseJson.result
              //console.log(data)
          })
          .catch((error) => {
           //Error
            alert(JSON.stringify(error));
            console.error(error);
          });
       }*/
  
       /* useEffect(()=>{
        
        },[]);*/
        
  }
  //console.log(data);
 
  
  //const { state } = useLocation();
  /*const route = useRoute()
  const nombre = route.params.nombre*/
  
//  const email = route.key
  //const navigation = useNavigation()
  /* 2. Get the param */
 // const nombre = navigation.getParent('nombre')
  //const email = navigation.getId('email')
  //const { nombre } = route.params
  
 // const currentUser = getCurrentUser();

/*  firebase.auth().onAuthStateChanged((user) => {
    user !== null ? (setLogin(false)) : setLogin(true) 
 }) //con esto funciona */


 
 async function postData() { //para consumir api desde variables es con el commillado derecho si es simple con una ' basta
  const response =  fetch(`https://desarrollophp2.azc.uam.mx/appmensajes/apiAlumnos/index.php?matricula=${matricula}`, {
  method: 'GET',
  headers: {'Content-Type': 'application/json'}
    }).then((response) => response.json())
  .then((responseJson) => {
    alert(JSON.stringify(responseJson));
    //console.log(typeof responseJson);
    setData(responseJson); //noes con result responseJson.result
    //console.log(data)
})
.catch((error) => {
 //Error
  alert(JSON.stringify(error));
  console.error(error);
});
}

 useFocusEffect(//cada vez que pase por aca verifica si es logeado o no entonces aqui con esta funcion se refresca
  useCallback(() => {
      const user = getCurrentUser()
      const user2 = getCurrentUserGoogle()
      if(user2){
        console.log(matricula)
        postData()
        setloginGoogle(true)
       
      }else{
        setloginGoogle(false)
      }
      //user2 ? setloginGoogle(true) : setloginGoogle(false)
      user ? setLogin(true) : setLogin(false)
      //esta funcion a la primera de arranque no funciona y no refresca la pantalla cuando cierras sesion
    //  setLogin[isUserLogged()] //isUserLogged nos sirve para verificar si hay un usuario logeado o no
}, [matricula])
 )

//en la primera se toma pero en las demas ya no se actualiza el useEffect
 /*useEffect(() => {
          const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false)
         //   setLogin[isUserLogged()]
    }, [])*/
    
  //no se alcanza a ver el loading porque pasa muy rapido el if  lo comentamos y ya se queda ahi el overlay
  if(login == null){
    //return <Text>Cargando...</Text>
   // return <Loading isVisible={true} text="Cargando..."/>
  }
   if(login == true) {
     
   }
    
   if(loginGoogle == true) {
   // se manda a traer la funcion data lo haciamos en un useeffect pero lo manda hacer cuando ya
   //hemos hecho las vista que vemos
   //postData()
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Detalles de la pantalla</Text>
    <Text>nombre: { nomb }</Text>
    <Text>email:  { ema }</Text>
    <Image source={{uri: fot}}
                         style={{height:20, width:20, borderRadius:20, margin:20}}
                         />
    
    
    <UsuarioLogeado/>
    
    

    </View>
    )
  }
   if(loginGoogle == false) {
    return <UsuarioInvitado/>
   }
      
     // return <Text>hola cuenta</Text>
}
/*{console.log(data)}
    <ScrollView>
    {data.map((element)=>(
      <View>
        <View>
          <Text>{element}</Text>
        </View>
      </View>
    ))}
    </ScrollView>*/
const styles = StyleSheet.create({})