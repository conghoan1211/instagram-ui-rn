import { StyleSheet, Text, View } from "react-native";
import IconBase from "./IconBase";
import { useTheme } from "../Theme/ThemeContext";
import { IconLibrary } from "../../constants/Const";

interface IconLinkProps {
    name: string;
    library: IconLibrary;
    badge?: number;  
    dot?: boolean;   
    size?: number;
}

const IconLink: React.FC<IconLinkProps> = ({ name, library, badge, dot, size }) => {
    const { theme } = useTheme();

    return (
        <View style={styles.icon}>
            <IconBase name={name} library={library} size={size} />

            {badge !== undefined && badge > 0 && (
                <View style={styles.badge}>
                    <Text style={[styles.badge_number]}>
                        {badge}
                    </Text>
                </View>
            )}
            {dot && !badge && (
                <View style={[styles.dot, {backgroundColor: theme.color_badge, borderColor: theme.background}]}>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        position: 'relative'
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
        width: 13,
        height: 13,
        borderRadius: 1000,
        borderWidth: 1.2,
    },
});
export default IconLink;