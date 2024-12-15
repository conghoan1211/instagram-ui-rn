import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Avatar from '../../components/Images/Avatar';
import avt from './../../assests/Img/glasses.jpg';
import { useTheme } from '../../components/Theme/ThemeContext';

interface FollowedProps {
    id: string,
    avatar: string,
    username: string
}

interface Props {
    followers: FollowedProps[];
}

const MutualFollowed: React.FC<Props> = ({ followers }) => {
    const { theme } = useTheme();

    // Hiển thị tối đa 3 avatar
    const displayedAvatars = followers.slice(0, 3);
    const remainingCount = followers.length > 3 ? followers.length - 3 : 0;

    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container}>
            {/* Avatar stack */}
            <View style={[styles.avatarStack]}>
                {displayedAvatars.map((follower, index) => (
                    <View key={follower.id}
                        style={[styles.avatar,
                        {
                            marginLeft: index > 0 ? -15 : 0,
                            zIndex: displayedAvatars.length - index
                        }]}>
                        <Avatar
                            key={follower.id}
                            url={avt}
                            width={42} height={42}
                            border
                            borderColor={theme.background}
                            borderWidth={1}
                        />
                    </View>
                ))}
            </View>

            {/* Text */}
            <Text style={[styles.text, { color: theme.text }]}>
                Followed by{' '}
                <Text style={styles.username}>{followers[0].username}</Text>
                {followers.length > 1 && (
                    <>
                        {', '}
                        <Text style={styles.username}>{followers[1].username}</Text>
                    </>
                )}
                {remainingCount > 0 && ` and ${remainingCount} others`}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    avatarStack: {
        flexDirection: 'row',
        marginRight: 4,
    },
    avatar: {
        // width: 43,
        // height: 43,
    },
    text: {
        fontSize: 14,
        alignItems: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    username: {
        fontWeight: 'bold',
    },

});


export default MutualFollowed;