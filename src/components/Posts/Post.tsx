import { StyleSheet, View } from "react-native";
import { useState } from "react";

import BodyPost from "./_BodyPost";
import HeaderPost from "./_HeaderPost";
import FooterPost from "./_FooterPost";
import CaptionPost from "./_CaptionPost";
import { useTheme } from "../Theme/ThemeContext";

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

interface Props {
    post: PostProps;
}

const Post: React.FC<Props> = ({ post }) => {
    const { theme } = useTheme();
    const [isLiked, setIsLiked] = useState(post.isLiked);
    const [likes, setLikes] = useState(post.likes);

    const handleToggleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };
    const handleDoubleTap = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        }
    };
    return (
        <View style={[styles.postContainer, { backgroundColor: theme.background }]}>
            <HeaderPost isfollow={post.isfollow} avatar={post.avatar} id={post.id} tick={post.tick} username={post.username} />
            <BodyPost images={post.images} onDoubleTap={handleDoubleTap} />
            <FooterPost
                isLiked={isLiked}
                likes={likes}
                comments={post.comments}
                shares={post.shares}
                onToggleLike={handleToggleLike}  
            />
            <CaptionPost caption={post.caption} createdAt={post.timestamp} username={post.username} />
        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
    },
    postImage: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
    },
    actions: {
        flexDirection: 'row',
        gap: 15,
    },
    caption: {
        paddingHorizontal: 10,
    },
    likeCount: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    timestamp: {
        color: 'gray',
        fontSize: 12,
        marginTop: 5,
    },
});

export default Post;
