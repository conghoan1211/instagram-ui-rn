import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";
import { useTheme } from "../Theme/ThemeContext";
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale'; // import locale tiếng Việt
import { formatTimeAgo } from "../../utils/format";

interface CaptionPostProps {
    username: string,
    caption: string,
    createdAt: Date
}

function CaptionPost({ caption, createdAt, username }: CaptionPostProps) {
    const { theme } = useTheme();
    const date = '12/11/2024'
    return (
        <View style={styles.container}>
            <Text style={[{ color: theme.text }]}>
                <Text style={[styles.username, { color: theme.text }]}>{username} </Text>
                <Text style={[styles.caption, { color: theme.text }]}> {caption}</Text>
            </Text>
            <Text style={[styles.createAt]}> {formatTimeAgo(createdAt)}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 6,
    },
    caption: {
        fontSize: 14,
        marginLeft: -2,
    },
    username: {
        fontWeight: '600',
        fontSize: 15,
    },
    createAt: {
        color: 'gray',
        fontSize: 12.5,
        marginTop: 5,
        marginLeft: -4,
    },

});

export default CaptionPost;