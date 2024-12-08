import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import { formatTimeAgo } from "../../utils/format";
import { globalStyles } from "../../constants/GlobalStyles";
import IconBase from "../Icons/IconBase";

interface CaptionPostProps {
    username: string,
    caption: string,
    createdAt: Date
}

const CaptionPost: React.FC<CaptionPostProps> = ({ caption, createdAt, username }) => {
    const { theme } = useTheme();
    return (
        <View style={styles.container}>
            <Text style={[{ color: theme.text }]}>
                <Text style={[styles.username, { color: theme.text }]}>{username} </Text>
                <Text style={[styles.caption, { color: theme.text }]}> {caption}</Text>
            </Text>
            <View style={[styles.footer, globalStyles.align_center]}>
                <Text style={[styles.createAt]}> {formatTimeAgo(createdAt)}</Text>
                <IconBase name="dot-single" library="Entypo" size={12} color="gray" />
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={[styles.translate, { color: theme.text }]}>See translation</Text>
                </TouchableOpacity>
            </View>
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
    footer: {
        marginTop: 5,
    },
    createAt: {
        color: 'gray',
        fontSize: 12,
        marginLeft: -4,
        marginRight: 1.2
    },
    translate: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 0.4,
        marginLeft: 1.2
    }

});

export default CaptionPost;