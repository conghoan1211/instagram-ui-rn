import { Platform, Text, View, StyleSheet } from "react-native";
import IconLink from "../../components/Icons/IconLink";
import { globalStyles } from "../../constants/GlobalStyles";
import { useTheme } from "../../components/Theme/ThemeContext";
import IconBase from "../../components/Icons/IconBase";

function HeaderProfile() {
    const { theme } = useTheme();

    return (
        <View style={[globalStyles.justify_between, styles.container]}>
            <View style={styles.iconLock}>
                <IconBase name="lock-closed-outline" library="Ionicons" size={16} />
            </View>
            <View style={globalStyles.align_center}>
                <Text style={[styles.username, { color: theme.text }]}>_hoanpc.03</Text>
                <View style={styles.iconDown}>
                    <IconBase name="chevron-down" library="EvilIcons" size={30} />
                </View>
                <View style={styles.dot}>
                    <IconBase name="dot-single" library="Entypo" color="red" size={35} />
                </View>
            </View>

            <View style={globalStyles.align_center}>
                <View style={styles.icon}>
                    <IconLink name="threads" library="FontAwesome6" size={27} badge={3} topBadge={-8.5} rightBadge={-9} />
                </View>
                <View style={styles.icon}>
                    <IconLink name="plus-square-o" library="FontAwesome" size={28} />
                </View>
                <View style={styles.icon}>
                    <IconLink name="three-bars" library="Octicons" size={23} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    username: {
        fontSize: 24,
        fontWeight: '700'
    },
    icon: {
        position: 'relative',
        marginLeft: 25,
    },
    dot: {
        marginLeft: -18,
        ...Platform.select({
            android: {
                marginBottom: 3,
            },
            ios: {
                marginBottom: 2
            }
        })
    },
    iconDown: {
        marginLeft: -4,
        marginBottom: 6,
        ...Platform.select({
            android: {
                marginBottom: 10,
            },
            ios: {
                marginBottom: 4
            }
        })
    }, 
    iconLock: {
        fontWeight: '500',    
        marginRight: -14,
        ...Platform.select({
            android: {
                marginRight: -45,
            },
        })
    }

});



export default HeaderProfile;