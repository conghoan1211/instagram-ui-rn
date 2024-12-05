import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../components/Theme/ThemeContext"; // Đường dẫn tuỳ thuộc cấu trúc thư mục

const Main = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.text, { color: theme.text }]}>
                Welcome to Themed App!
            </Text>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.buttonBackground }]}
                onPress={toggleTheme}
            >
                <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                    Toggle Theme
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
    },
});

export default Main;
