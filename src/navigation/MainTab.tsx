import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from "./MainTabItem";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import UpPostScreen from "../screens/UpPost/UpPostScreen";
import VideoScreen from "../screens/Videos/VideoScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { useTheme } from "../components/Theme/ThemeContext";

const Tab = createBottomTabNavigator();

function MainTab() {
    const { theme } = useTheme();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon routeName={route.name} color={color} />
                    ),
                    tabBarStyle: {
                        backgroundColor: theme.background,
                        borderTopColor: theme.borderMainTap,
                    },
                    tabBarActiveTintColor: theme.text,
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen name="home" component={HomeScreen} options={{ title: '' }} />
                <Tab.Screen name="search" component={SearchScreen} options={{ title: '' }} />
                <Tab.Screen name="upPost" component={UpPostScreen} options={{ title: '' }} />
                <Tab.Screen name="video" component={VideoScreen} options={{ title: '' }} />
                <Tab.Screen name="profile" component={ProfileScreen} options={{ title: '' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainTab;