import React from 'react';
import IconBase from '../components/Icons/IconBase';
import { StyleSheet, View } from 'react-native';

interface TabBarIconProps {
    routeName: string;
    color: string
}

const iconTab = {
    home: { iconName: 'home-filled', library: 'MaterialIcons', size: 27 },
    search: { iconName: 'search', library: 'Feather', size: 25 },
    video: { iconName: 'video', library: 'Octicons', size: 24 },
    upPost: { iconName: 'plus-square-o', library: 'FontAwesome', size: 26 },
    profile: { iconName: 'user', library: 'Feather', size: 25 },
} as const;

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, color }) => {
    const config = iconTab[routeName as keyof typeof iconTab];

    return (
        <View style={styles.container}>
            <IconBase name={config.iconName} size={config.size} color={color} library={config.library as any} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        alignItems: 'center'
    },
});

export default TabBarIcon;
