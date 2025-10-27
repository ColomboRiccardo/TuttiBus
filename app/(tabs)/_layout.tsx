import {Tabs} from 'expo-router';
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                    height: 55,
                },
            }}
        >
            <Tabs.Screen name="index" options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({color, size}) => <Ionicons name="home" size={size} color={color}/>
            }}/>
            <Tabs.Screen name="map" options={{title: "Map", tabBarIcon: ({color, size}) => <Ionicons name="map" size={size} color={color}/>}}/>
            <Tabs.Screen name="buses" options={{title: "Buses", tabBarIcon: ({color, size}) => <Ionicons name="bus" size={size} color={color}/>}}/>
            <Tabs.Screen name="settings" options={{title: "Settings", tabBarIcon: ({color, size}) => <Ionicons name="settings" size={size} color={color}/>}}/>
        </Tabs>
    );
}
