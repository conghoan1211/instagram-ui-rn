import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "../../components/Images/Avatar";
import { useTheme } from "../Theme/ThemeContext";

interface AvatarProps {
    url?: string
    hasStory?: boolean
    readStory?: boolean
    online?: boolean 
    me?: boolean
    
}

const StoryItem: React.FC<AvatarProps> = ({ url, hasStory, readStory, online, me }) => {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} >
                <Avatar url={url} readStory={readStory} hasStory={hasStory} online={online} me={me}/>
            </TouchableOpacity>
            <Text style={[styles.name, { color: theme.text }]}>
                sontungmtp
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 100,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 8,
    },
    name : {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 4,
    }
});

export default StoryItem;