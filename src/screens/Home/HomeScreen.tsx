import { StyleSheet, Text, View } from "react-native";
import HeaderView from "./_header";
import { useTheme } from "../../components/Theme/ThemeContext";
import Stories from "./_stories";
import Story from "../../components/Stories/Story";

function HomeScreen() {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <HeaderView />
            <Story />
            <View>
                <Text style={{ fontSize: 30 }}>
                    ascsaadadvdv
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});

export default HomeScreen;