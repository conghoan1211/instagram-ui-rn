import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../components/Theme/ThemeContext";
import { ThemedIcon } from "../../components/Theme/ThemedIcon";
import { globalStyles } from "../../constants/GlobalStyles";
import IConLink from "../../components/Icons/IconLink";

function HeaderView() {
    const { theme } = useTheme();

    return (
        <View style={[styles.header, {}]}>
            <Text style={[styles.title, { color: theme.text }]}>
                Instagram
            </Text>
            <View style={globalStyles.justify_between}>
                <View style={styles.icon}>
                    <ThemedIcon />
                </View>
                <View style={styles.icon}>
                    <IConLink name="hearto" library="AntDesign" dot size={24} />
                </View>
                <View style={styles.icon}>
                    <IConLink name="message-circle" library="Feather" badge={3} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 3,
        marginLeft: 10,
        paddingBottom: 10,
        height: 50,
    },
    title: {
        fontSize: 28,
        // fontFamily: '',
    },
    icon: {
        marginHorizontal: 10,
        paddingTop: 8,
    }
});

export default HeaderView;
