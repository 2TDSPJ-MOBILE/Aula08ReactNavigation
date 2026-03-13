import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home"
import Login from "../screens/Login"
import Servicos from "../screens/Servicos";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator 
            initialRouteName="home" 
            screenOptions={{
                headerStyle:{backgroundColor:"#727272"},
                headerTitleAlign:"center",
                headerTintColor:"white",
                headerTitleStyle:{fontSize:30}
            }}
        >
            <Stack.Screen name="login" component={Login} options={{title:"Login"}}/>
            <Stack.Screen name="home" component={Home} options={{title:"Inicio"}}/> 
            <Stack.Screen name="servicos" component={Servicos} options={{title:"Serviços"}}/>
        </Stack.Navigator>
    )
}