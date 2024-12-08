import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconBase from "./IconBase";
import { useTheme } from "../Theme/ThemeContext";
import { IconLibrary } from "../../constants/Const";

interface IconLinkProps {
    name: string;
    library: IconLibrary;
    size?: number;
    badge?: number;
    dot?: boolean;
    color?: string
    onPress?: () => void;
}

const IconLink: React.FC<IconLinkProps> = ({ name, library, badge, dot, size, color, onPress }) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.icon} onPress={onPress}>
            <IconBase name={name} library={library} size={size} color={color} />

            {badge !== undefined && badge > 0 && (
                <View style={styles.badge}>
                    <Text style={[styles.badge_number]}>
                        {badge}
                    </Text>
                </View>
            )}
            {dot && !badge && (
                <View style={[styles.dot, { backgroundColor: theme.color_badge, borderColor: theme.background }]}>
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // badge notification
    badge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: '#ee0004',
        width: 18,
        height: 18,
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',

    },
    badge_number: {
        fontSize: 13,
        fontWeight: '600',
        color: '#ffffff',

    },
    // dot notification
    dot: {
        position: 'absolute',
        top: -2,
        right: -4,
        width: 12,
        height: 12,
        borderRadius: 1000,
        borderWidth: 2,
    },
});
export default IconLink;