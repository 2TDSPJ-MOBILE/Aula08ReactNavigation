import {Text,StyleSheet,View} from "react-native"

export default function Servicos(){
    return(
        <View style={styles.container}>
            <Text>Tela Servicos carregada.</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#b7f87f"
    }
})