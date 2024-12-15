import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../components/Theme/ThemeContext';
import HeaderProfile from './_HeaderProfile';
import Information from './_InforProfile';
import Bio from './_BioProfile';
import MutualFollowed from './_MutualFollowed';
import ActionProfile from './_ActionProfile';
import StoryProfile from './_StoriesProfile';

export default function ProfileScreen() {
    const { theme } = useTheme();

    const followers = [
        { id: '1', username: 'ily_jisoonie', avatar: '../../assests/Img/default-avatar.png' },
        { id: '2', username: 'phamba2711', avatar: '../../assests/Img/glasses.jpg' },
        { id: '3', username: 'user3', avatar: '../../assests/Img/kttend.jpg' },
        { id: '3', username: 'user3', avatar: '../../assests/Img/kttend.jpg' },
        { id: '3', username: 'user3', avatar: '../../assests/Img/kttend.jpg' },

        // ... thêm người theo dõi khác
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <HeaderProfile />
            <Information />
            <Bio />
            <MutualFollowed followers={followers} />
            <ActionProfile />
            <StoryProfile />
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

