import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../components/Theme/ThemeContext";

function Bio() {
    const { theme } = useTheme();

    return (
        <View style={styles.bio}>
            <Text style={[styles.username, { color: theme.text }]}>Phạm Hoan</Text>
            <Text style={[styles.text, { color: theme.text }]}>Annhonnn nnnnnnnnnnnnnnnnnnn</Text>
            <Text>🪐🪐🪐</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    bio: {
        gap: 5,
    },
    username: {
        fontSize: 14.5,
        fontWeight: '600',
        marginTop: 8,
    },
    text: {
        fontSize: 14,
    }
});

export default Bio;