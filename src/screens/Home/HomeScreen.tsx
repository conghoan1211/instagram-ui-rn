import { StyleSheet, Text, View } from "react-native";
import HeaderView from "./_header";
import { useTheme } from "../../components/Theme/ThemeContext";
import Story from "../../components/Stories/Story";
import Post from "../../components/Posts/Post";

function HomeScreen() {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <HeaderView />
            <Story />
            <Post/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,

    }
});

export default HomeScreen;