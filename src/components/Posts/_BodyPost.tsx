import { Image, StyleSheet } from "react-native";

interface BodyPostProps {
    image: string;
}

function BodyPost({ image }: BodyPostProps) {
    return (
        <Image source={image as any} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        resizeMode: 'center',
        maxWidth: '100%',
        maxHeight: 300,
        height: 300,
        objectFit: 'contain',
    },

});

export default BodyPost;