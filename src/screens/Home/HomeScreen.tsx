import { StyleSheet, Text, View } from "react-native";
import HeaderView from "./_header";
import { useTheme } from "../../components/Theme/ThemeContext";
import Story from "../../components/Stories/Story";
import Post from "../../components/Posts/Post";
import { FlatList, ScrollView } from "react-native-gesture-handler";

function HomeScreen() {
    const { theme } = useTheme();
    const posts = [
        {
            id: 1,
            username: 'roses_are_rosie',
            tick: true,
            isfollow: true,
            avatar: require('../../assests/Img/glasses.jpg'), // Đường dẫn ảnh cục bộ
            image: require('../../assests/Img/kttend.jpg'),   // Đường dẫn ảnh cục bộ
            caption: 'call us what we are  dvhosdv ;SV: SV SKV SIDvdjs shvisoiv sdv',
            likes: 1219,
            comments: 311,
            shares: 54,
            isLiked: false,
            timestamp: new Date('2024-12-07T13:30:00Z'),
        },
        {
            id: 2,
            username: 'janedoe',
            tick: false,
            isfollow: true,
            avatar: require('../../assests/Img/glasses.jpg'), // Đường dẫn ảnh cục bộ
            image: require('../../assests/Img/kttend.jpg'),   // Đường dẫn ảnh cục bộ
            caption: 'Loving this day at the beach 🏖️',
            likes: 87100,
            comments: 8,
            shares: 1,
            isLiked: true,
            timestamp: new Date('2024-12-06T13:30:00Z'),
        },
        {
            id: 3,
            username: 'janedoe',
            tick: false,
            isfollow: true,
            avatar: require('../../assests/Img/glasses.jpg'), // Đường dẫn ảnh cục bộ
            image: require('../../assests/Img/kttend.jpg'),   // Đường dẫn ảnh cục bộ
            caption: 'Loving this day at the beach 🏖️',
            likes: 87100,
            comments: 8,
            shares: 1,
            isLiked: true,
            timestamp: new Date('2024-10-05T13:30:00Z'),
        },
    ];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <HeaderView />
            <Story />
            <View>
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,

    }
});

export default HomeScreen;