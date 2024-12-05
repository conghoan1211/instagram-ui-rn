import { Pressable, StyleSheet } from "react-native";
import { useTheme } from "./ThemeContext";
import IconBase from "../Icons/IconBase";

export const ThemedIcon = () => {
    const { toggleTheme } = useTheme();

    return (
        <Pressable
            onPress={toggleTheme}
            style={[styles.themedContainer]}>
            <IconBase name="moon" library="Feather" />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    themedContainer: {
        backgroundColor: 'transparent'
    },
});