import { StyleSheet, View } from "react-native";
import HeaderView from "./_header";
import { useTheme } from "../../components/Theme/ThemeContext";

function HomeScreen() {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <HeaderView />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});

export default HomeScreen;