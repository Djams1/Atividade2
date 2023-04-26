import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default function Tamanhotxt() {
    const [tamanhoFonte , setTamanhoFonte] = useState(14);

    const aumentarFonte = ()  => {
            setTamanhoFonte(tamanhoFonte + 2)
    }
    const diminuirFonte = ()  => {
        setTamanhoFonte(tamanhoFonte - 2)
}
        
        return (
            <View style={stylestamanhotxt.container}>
                <Text style={{  fontSize:tamanhoFonte }}>Mude o Tamanho da fonte</Text>
                <View style={stylestamanhotxt.compbotoes}>
                    <TouchableOpacity style={stylestamanhotxt.botaoma} onPress={aumentarFonte}><Text style={{fontSize:25, color:'white'}}>+</Text></TouchableOpacity>
                    <TouchableOpacity style={stylestamanhotxt.botaome} onPress={diminuirFonte}><Text style={{fontSize:25, color:'white'}}>-</Text></TouchableOpacity>
                </View>
            </View>
    )
    
}

    const stylestamanhotxt = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          
        },
        compbotoes:{
            flexDirection: "row",
            justifyContent:'space-between',
        },
        botaoma:{
            backgroundColor: 'cyan', 
            padding: 16,
            marginTop:30,
            marginRight:100,
            borderTopLeftRadius:10,
            borderBottomLeftRadius:10
        },
        botaome:{
            marginTop:27,
            fontSize:20,
            backgroundColor: 'cyan', 
            padding: 17,
            borderTopRightRadius:10,
            borderBottomRightRadius:10
        }


      });