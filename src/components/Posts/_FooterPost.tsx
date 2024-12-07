import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconLink from "../Icons/IconLink";
import { useTheme } from "../Theme/ThemeContext";
import { globalStyles } from "../../constants/GlobalStyles";
import { formatComment, formatLike } from "../../utils/format";

interface FooterPostProps {
    isLiked: boolean;
    likes: number;
    comments: number;
    shares: number;
}

function FooterPost({ isLiked, likes, comments, shares }: FooterPostProps) {
    const { theme } = useTheme();

    return (
        <View style={styles.footer}>
            <View style={styles.actions}>
                <TouchableOpacity activeOpacity={0.5} style={[globalStyles.align_center]}>
                    <View style={styles.iconHeart}>
                        <IconLink name="heart" library="Feather" size={24.5} />
                    </View>
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