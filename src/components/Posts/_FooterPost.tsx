import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable'; // Thư viện animation
import { useRef, useState } from "react";

import IconLink from "../Icons/IconLink";
import { useTheme } from "../Theme/ThemeContext";
import { globalStyles } from "../../constants/GlobalStyles";
import { formatComment, formatLike } from "../../utils/format";

interface FooterPostProps {
    isLiked: boolean;
    likes: number;
    comments: number;
    shares: number;
    onToggleLike: () => void;
}

const FooterPost: React.FC<FooterPostProps> = ({ isLiked, likes, comments, shares, onToggleLike }) => {
    const { theme } = useTheme();
    const heartRef = useRef<Animatable.View>(null) as any;

    const handleLikePress = () => {
        if (!isLiked) {
            heartRef.current?.bounceIn(100); // Thêm hiệu ứng bounce
        }
        onToggleLike();
    };

    return (
        <View style={styles.footer}>
            <View style={styles.actions}>
                {/* Heart Icon */}
                <TouchableOpacity activeOpacity={0.5} style={[globalStyles.align_center]}>
                    <Animatable.View ref={heartRef} style={styles.iconHeart}>
                        <IconLink
                            name={isLiked ? 'heart' : 'heart'} // Icon khác khi like
                            library={isLiked ? 'AntDesign' : 'Feather'}
                            size={24.5} onPress={handleLikePress}
                            color={isLiked ? theme.heartActive : theme.text} // Đổi màu khi like
                        />
                    </Animatable.View>
                    <Text style={[styles.number, { color: theme.text }]}>{formatLike(likes)}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={[globalStyles.align_center]}>
                    <View style={styles.iconMessage}>
                        <IconLink name="message-circle" library="Feather" />
                    </View>
                    <Text style={[styles.number, { color: theme.text }]}>{formatComment(comments)}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={globalStyles.align_center}>
                    <View style={styles.iconPlane}>
                        <IconLink name="paper-airplane" library="Octicons" size={26} />
                    </View>
                    <Text style={[styles.number, { color: theme.text }]}>{formatComment(shares)}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.iconBookmark}>
                <IconLink name="bookmark-o" library="FontAwesome" size={24.5} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 4
    },
    actions: {
        flexDirection: 'row',
        gap: 18,
    },
    number: {
        fontWeight: '600'
    },
    iconHeart: {
        marginRight: 4,
        width: 25,
    },
    iconMessage: {
        transform: [{ scaleX: -1 }],
        marginRight: 4,
    },
    iconPlane: {
        transform: [
            { rotate: '335deg' }, { translateY: -3 }, { scaleX: 0.9 },
        ],
        paddingLeft: 7,
        fontWeight: '300',
        marginRight: 2,
    },
    iconBookmark: {
        transform: [
            { scaleY: 0.95 },
        ],
    }
});
export default FooterPost;