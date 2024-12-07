import { StyleSheet, Text, View } from "react-native";
import Avatar from "../Images/Avatar";
import glasses from './../../assests/Img/glasses.jpg';
import { useTheme } from "../Theme/ThemeContext";
import { globalStyles } from "../../constants/GlobalStyles";
import IconBase from "../Icons/IconBase";
import IconLink from "../Icons/IconLink";

interface HeaderPostProps {
    id: number;
    username: string;
    tick: boolean;
    avatar: string;
    isfollow: boolean;
}

function HeaderPost({ username, tick, avatar, isfollow, id }: HeaderPostProps) {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, globalStyles.justify_between]}>
            <View style={[globalStyles.align_center]}>
                <Avatar url={glasses} width={40} height={40} hasStory borderWithStory={3} />
                <Text style={[styles.name, { color: theme.text }]}>
                    {username}
                </Text>
                {tick && <View style={styles.iconVerify}>
                    <IconBase name="verified" library="MaterialIcons" size={14} color={theme.iconTick} />
                </View>}
            </View>
            <View>
                <IconLink name="dots-three-horizontal" library="Entypo" size={18} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        maxWidth: '100%',
        paddingLeft: 8,
        paddingRight: 12,
        // backgroundColor: 'red'
    },
    name: {
        fontWeight: '600',
        fontSize: 14,
        marginLeft: 8,
        marginRight: 5
    },
    iconVerify: {
        marginTop: 2
    }

});

export default HeaderPost;