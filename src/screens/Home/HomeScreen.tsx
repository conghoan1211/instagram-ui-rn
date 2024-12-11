import { StyleSheet, Text, View } from "react-native";
import HeaderView from "./_header";
import { useTheme } from "../../components/Theme/ThemeContext";
import Story from "../../components/Stories/Story";
import Post from "../../components/Posts/Post";
import { FlatList } from "react-native-gesture-handler";

interface PostProps {
    id: number;
    username: string;
    tick: boolean;
    isfollow: boolean;
    avatar: string;
    images: string[];
    caption: string;
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
    timestamp: Date;
}


function HomeScreen() {
    const { theme } = useTheme();
    const posts = [
        {
            id: 1,
            username: 'roses_are_rosie',
            tick: true,
            isfollow: false,
            avatar: require('../../assests/Img/glasses.jpg'),
            images: [
                require('../../assests/Img/kttend.jpg'),
                require('../../assests/Img/glasses.jpg'),
                require('../../assests/Img/glasses.jpg'),
                require('../../assests/Img/glasses.jpg'),
            ],
            caption: 'call us what we are  dvhosdv ;SV: SV SKV SIDvdjs shvisoiv sdv',
            likes: 1219,
            comments: 311,
            shares: 5,
            isLiked: false,
            timestamp: new Date('2024-12-05T13:30:00Z'),
        },
        {
            id: 2,
            username: 'lia_loves___',
            tick: true,
            isfollow: false,
            avatar: require('../../assests/Img/glasses.jpg'),
            images: [
                require('../../assests/Img/kttend.jpg'),
            ],
            caption: 'Loving this day at the beach 🏖️',
            likes: 78921,
            comments: 311,
            shares: 54,
            isLiked: false,
            timestamp: new Date('2024-10-07T13:30:00Z'),
        },
        {
            id: 3,
            username: 'janedoe',
            tick: false,
            isfollow: true,
            avatar: require('../../assests/Img/glasses.jpg'),
            images: [
                require('../../assests/Img/kttend.jpg'),
                require('../../assests/Img/glasses.jpg'),
            ],
            caption: 'call us what we are  dvhosdv ;SV: SV SKV SIDvdjs shvisoiv sdv',
            likes: 894,
            comments: 311,
            shares: 54,
            isLiked: false,
            timestamp: new Date('2024-12-07T13:30:00Z'),
        },
    ];

    const renderHeader = () => (
        <>
            <HeaderView />
            <Story />
        </>
    );

    const renderItem = ({ item }: { item: PostProps }) => (
        <Post post={item} />
    );

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            style={[styles.container, { backgroundColor: theme.background }]}
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={renderHeader}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,

    }
});

export default HomeScreen;