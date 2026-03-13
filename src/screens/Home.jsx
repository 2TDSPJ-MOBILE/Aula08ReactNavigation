import {Text,StyleSheet,View,Button} from "react-native"

export default function Home({navigation}){
 
    return(
        <View style={styles.container}>
            <Text >Tela Inicial carregada.</Text>
            <Button 
                title="Fazer Login"
                onPress={()=>navigation.navigate("login")}
            />
            <Button 
                title="Serviços"
                onPress={()=>navigation.navigate("servicos")}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ccc"
    }
})