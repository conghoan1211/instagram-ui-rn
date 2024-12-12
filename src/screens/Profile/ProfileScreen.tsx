import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../components/Theme/ThemeContext';
import HeaderProfile from './_HeaderProfile';
import InforProfile from './_InforProfile';

export default function ProfileScreen() {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <HeaderProfile />
            <InforProfile />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

