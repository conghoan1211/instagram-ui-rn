import { Platform, StyleSheet, Text, View } from "react-native";
import Avatar from "../Images/Avatar";
import { useTheme } from "../Theme/ThemeContext";
import { globalStyles } from "../../constants/GlobalStyles";
import IconBase from "../Icons/IconBase";
import IconLink from "../Icons/IconLink";
import ButtonBase from "../Button/ButtonBase";

interface HeaderPostProps {
    id: number;
    username: string;
    tick: boolean;
    avatar: string;
    isfollow: boolean;
}
const HeaderPost: React.FC<HeaderPostProps> = ({ username, tick, avatar, isfollow, id }) => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, globalStyles.justify_between]}>
            <View style={[globalStyles.align_center]}>
                <Avatar url={avatar} width={40} height={40} hasStory borderWithStory={3} />
                <View style={styles.title}>
                    <View style={globalStyles.align_center}>
                        <Text style={[styles.name, { color: theme.text }]}>
                            {username}
                        </Text>
                        {tick && <View style={styles.iconVerify}>
                            <IconBase name="verified" library="MaterialIcons" size={14} color={theme.iconTick} />
                        </View>}
                    </View>
                    {!isfollow && <Text style={[styles.suggested, { color: theme.text }]}> Suggested for you</Text>}
                </View>
            </View>
            <View style={globalStyles.align_center}>
                {!isfollow && <View style={styles.buttonFollow}>
                    <ButtonBase title="Follow"
                        onPress={() => alert('Message button pressed')}
                        type="primary"
                    />
                </View>}
                <View>
                    <IconLink name="dots-three-horizontal" library="Entypo" size={18} />
                </View>
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
        ...Platform.select({
            android: {
                marginBottom: 4,
            },
            ios: {
                marginBottom: 2
            }
        })
    },
    title: {
        marginLeft: 8,
    },
    name: {
        fontWeight: '600',
        fontSize: 14.5,
        marginRight: 5,

    },
    suggested: {
        fontSize: 13,
        marginLeft: -4,
    },
    iconVerify: {
        marginTop: 2
    },
    buttonFollow: {
        marginRight: 15
    }

});

export default HeaderPost;