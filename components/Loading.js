import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base'

export default function Loading({ isVisible, text}) {
  return (
   <Overlay
        isVisible={isVisible}
        windowBackgroundColor="rgba(0,0,0,0.5)"
        overlayBackgroundColor="transparent"
        overlayStyle={styles.overlay}
   >
    <View style={styles.view}>
        <ActivityIndicator 
            size="large"
            color="#ed3226"
        />
        {
            text && <Text style={styles.text}>{text}</Text>
        }
    </View>
   </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay:{
        height:100,
        width:100,
        backgroundColor:"#fff",
        borderColor: "#ed3226",
        borderWidth: 2,
        borderRadius: 10
    },
    view:{
        flex:1, //ocupa todo el ancho
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color:"#ed3226",
        marginTop:10
    }
})