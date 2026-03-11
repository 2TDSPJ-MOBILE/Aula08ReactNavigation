import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home"
import Login from "../screens/Login"
import {Feather} from "@expo/vector-icons"

//Criando a constante Tab para configurar nossa navegação
const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen 
                name="home"
                component={Home}
                options={{tabBarIcon:()=><Feather name="home" color="green" size={30}/>,
                tabBarLabel:"Inicio",tabBarLabelStyle:{fontSize:20}}}

            />
            <Tab.Screen name="login" component={Login}
                options={{tabBarIcon:()=><Feather name="log-in" color="green" size={30}/>}}
            />
        </Tab.Navigator>
    )
}