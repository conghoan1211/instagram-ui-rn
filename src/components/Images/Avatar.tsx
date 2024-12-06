import { Image, StyleSheet, View, Platform, Text } from "react-native";
import Images from "../../constants/Const";
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from "../Theme/ThemeContext";
import IconBase from "../Icons/IconBase";
import { globalStyles } from "../../constants/GlobalStyles";

interface AvatarProps {
    url?: string
    hasStory?: boolean
    readStory?: boolean
    online?: boolean
    me?: boolean
    width?: number
    height?: number
    borderWithStory?: number
}

const Avatar: React.FC<AvatarProps> = ({ url, hasStory, readStory = false, online = false, me = false, width = 86, height = 86, borderWithStory = 6, }) => {
    const { theme } = useTheme();

    let gradientColors: string[];
    if (hasStory) {
        if (readStory) gradientColors = ["#a4a4a4", "#a4a4a4"];
        else gradientColors = ["#DE0046", "#d80464", "#F7A34B"];
    } else gradientColors = ["transparent", "transparent"];

    const borderStory = readStory ? 3 : 2.5;

    return (
        <>
            <LinearGradient
                colors={gradientColors as any}
                start={{ x: 1, y: 0 }}
                end={{ x: 0.05, y: 0.1 }}
                style={[styles.storyBorder, {
                    height: height,
                    width: width
                }]}
            >
                <Image
                    source={url ?? Images.default_avatar}
                    style={[styles.image, {
                        borderColor: hasStory ? theme.background : "transparent",
                        borderWidth: borderStory,
                        width: (width - borderWithStory),
                        height: (height - borderWithStory)
                    }]}
                />
            </LinearGradient>
            {online && <View style={[styles.online, { borderColor: theme.background }]} />}
            {me && <View style={[styles.addStory, globalStyles.justify_align_center, { borderColor: theme.background }]}>
                <IconBase name="plus" library="Entypo" size={18} color="#fff" />
            </View>}
        </>
    );
};

const styles = StyleSheet.create({
    storyBorder: {
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        overflow: "hidden",
        position: 'relative',

    },
    image: {
        borderRadius: 1000,
    },
    online: {
        position: 'absolute',
        width: 17,
        height: 17,
        backgroundColor: '#02c91e',
        borderRadius: 1000,
        bottom: 4,
        right: 6,
        borderWidth: 2.5,
    },
    addStory: {
        position: 'absolute',
        bottom: 3,
        right: -2,
        width: 28,
        height: 28,
        borderRadius: 1000,
        color: '#fff',
        backgroundColor: '#1877f2',
        borderWidth: 3,
    }
});

export default Avatar