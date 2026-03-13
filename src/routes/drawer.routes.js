import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home"
import Login from "../screens/Login"
import Servicos from "../screens/Servicos"
import {Feather} from "@expo/vector-icons"


const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{drawerStyle:{backgroundColor:"#d6f490"}}}>
            <Drawer.Screen 
                name="home" component={Home}
                options={{
                    title:"Inicio",
                    drawerIcon:()=><Feather name="home" size={20} color="green"/>                                    
                }}
            />
            <Drawer.Screen name="login" component={Login}/>
            <Drawer.Screen name="servicos" component={Servicos}/>
        </Drawer.Navigator>
    )
}