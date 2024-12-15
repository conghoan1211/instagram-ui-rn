import {
    DimensionValue, StyleSheet, Text, TouchableOpacity,
    StyleProp, ViewStyle, TextStyle
} from "react-native";
import { useTheme } from "../Theme/ThemeContext";

interface ButtonBaseProps {
    title: string;
    onPress?: () => void;
    type?: 'primary' | 'secondary';
    disabled?: boolean;
    width?: DimensionValue,
    height?: DimensionValue,
    fontSize?: number,
    color?: string,
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({ title, onPress, type = 'primary', disabled = false,
    width = 72, height = 34, fontSize, color, style, textStyle }) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    width: width,
                    height: height,
                    backgroundColor: type === 'primary'  ? theme.btn_primary_bg : 'transparent',
                    borderColor: type === 'secondary' ? theme.text : 'transparent',
                    borderWidth: type === 'secondary' ? 1 : 0,
                },
                disabled && styles.disabledButton,
                style
            ]}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled}
        >
            <Text style={[
                styles.text,
                {
                    color: color ?? theme.text,
                    fontSize: fontSize ?? 14
                },
                disabled && styles.disabledText, textStyle
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
