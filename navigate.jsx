//Описание всех необходимых экранов 
import React from "react";
import Main from "./components/Main";
import FullInfo from "./components/FullInfo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function  Navigate (){
    return <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
        name ="Main"
        component={Main}
        options={{title:'Bucky Fighter',
            headerStyle:{backgroundColor:'#ceeb3d',height:100},
            headerTitleStyle:{fontFamily:'dyna-semi-bold',}
    
    }
        
        }/>

        <Stack.Screen
        name ="FullInfo"
        component={FullInfo}
        options={{title:'Full info', headerStyle:{backgroundColor:'#ceeb3d',height:100},
        headerTitleStyle:{fontFamily:'dyna-semi-bold',}}}
        
        />
        </Stack.Navigator>
    </NavigationContainer>
}