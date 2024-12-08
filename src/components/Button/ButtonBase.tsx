import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../Theme/ThemeContext";

interface ButtonBaseProps {
    title: string;
    onPress: () => void;
    type?: 'primary' | 'secondary';
    disabled?: boolean;
    width?: number,
    height?: number,
    fontSize?: number,
    color?: string
}

const ButtonBase: React.FC<ButtonBaseProps> = ({ title, onPress, type = 'primary', disabled = false, width = 72, height = 34, fontSize, color }) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            style={[
                styles.button,
                type === 'primary' ? {
                    backgroundColor: theme.btn_primary_bg,
                    height: height, width: width
                } : {
                    backgroundColor: 'transparent',
                    borderColor: theme.text,
                    borderWidth: 1,
                    height: height, width: width
                },
                disabled && styles.disabledButton,
            ]}
            onPress={onPress}
            activeOpacity={0.5}
            disabled={disabled}
        >
            <Text style={[
                styles.text,
                {
                    color: color ?? theme.text,
                    fontSize: fontSize ?? 14
                },
                disabled && styles.disabledText,
            ]} > {title} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: '600',
    },
    primaryButton: {
        // backgroundColor: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)', 
        backgroundColor: '#282828'
    },
    secondaryButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'transparent',
    },
    disabledButton: {
        backgroundColor: '#e0e0e0',
    },
    secondaryText: {
        color: '#333',
    },
    disabledText: {
        color: '#999',
    },
});

export default ButtonBase;
