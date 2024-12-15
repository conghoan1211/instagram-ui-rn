import { StyleSheet, Text, TextBase, TouchableOpacity, View } from "react-native";
import avt from './../../assests/Img/avt.jpg';
import Avatar from "../../components/Images/Avatar";
import { useTheme } from "../../components/Theme/ThemeContext";

function Infor() {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.avatar} >
                <Avatar url={avt} me width={90} height={90} border borderWidth={0.2} />
                <View style={[styles.thoughtBubble, { backgroundColor: theme.bgAvtStory }]}>
                    <Text style={[styles.thoughtText, {}]}>Note...</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.box}>
                <Text style={[styles.number, { color: theme.text }]}>2</Text>
                <Text style={[styles.title, { color: theme.text }]}>posts</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.box}>
                <Text style={[styles.number, { color: theme.text }]}>39</Text>
                <Text style={[styles.title, { color: theme.text }]}>followers</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.box}>
                <Text style={[styles.number, { color: theme.text }]}>126</Text>
                <Text style={[styles.title, { color: theme.text }]}>following</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    avatar: {
        width: 94,
        height: 94,
        position: 'relative',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90
    },
    number: {
        fontWeight: '600',
        fontSize: 15,
    },
    title: {
        fontSize: 13.5
    },
    thoughtBubble: {
        position: 'absolute',
        top: -14,
        backgroundColor: '#363636',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 15,
        zIndex: 1,
    },
    thoughtText: {
        fontSize: 12,
        color: '#888'
    },
});

export default Infor;