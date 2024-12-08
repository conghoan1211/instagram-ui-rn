import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "../../components/Images/Avatar";
import { useTheme } from "../Theme/ThemeContext";

interface StoryItemProps {
    url?: string
    hasStory?: boolean
    readStory?: boolean
    online?: boolean
    me?: boolean
    name: string
}

const StoryItem: React.FC<StoryItemProps> = ({ url, hasStory, readStory, online, me, name }) => {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} >
                <Avatar
                    url={url} readStory={readStory}
                    hasStory={hasStory}
                    online={online}
                    me={me}
                    width={90}
                    height={90}
                />
            </TouchableOpacity>
            <Text style={[styles.name, { color: !me ? theme.textStory: '#999' }]}>
                {!me ? name: 'Your story'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 115,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 6,
    },
    name: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 4,
    }
});

export default StoryItem;