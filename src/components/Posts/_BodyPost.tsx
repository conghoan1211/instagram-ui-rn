import { useRef, useState } from "react";
import {
    Animated, Image, View, StyleSheet, FlatList,
    TouchableWithoutFeedback, GestureResponderEvent,
    Dimensions,
    Text
} from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import IconBase from "../Icons/IconBase";
import { NativeSyntheticEvent } from "react-native";
import { NativeScrollEvent } from "react-native";

interface BodyPostProps {
    images: string[];
    onDoubleTap: () => void;
}

const BodyPost: React.FC<BodyPostProps> = ({ images, onDoubleTap }) => {
    const { theme } = useTheme();
    const lastTap = useRef<number>(0);
    const containerRef = useRef<View>(null); // Thêm ref để lấy tọa độ View
    const [hearts, setHearts] = useState<Array<{
        id: number,
        x: number,
        y: number,
        scale: Animated.Value
    }>>([]);
    const screenWidth = Dimensions.get('window').width;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDoubleTap = (event: GestureResponderEvent) => {
        const now = Date.now();
        const { pageX, pageY } = event.nativeEvent;

        if (now - lastTap.current < 300) {
            containerRef.current?.measure((x, y, width, height, pageXOffset, pageYOffset) => {
                const adjustedX = pageX - pageXOffset; // Tọa độ x trong View
                const adjustedY = pageY - pageYOffset; // Tọa độ y trong View

                const newHeart = {
                    id: now,
                    x: adjustedX,
                    y: adjustedY,
                    scale: new Animated.Value(0),
                };

                setHearts((prevHearts) => [...prevHearts, newHeart]);

                Animated.sequence([
                    Animated.spring(newHeart.scale, {
                        toValue: 1,
                        friction: 3,
                        useNativeDriver: true,
                    }),
                    Animated.timing(newHeart.scale, {
                        toValue: 0,
                        duration: 100,
                        delay: 0,
                        useNativeDriver: true,
                    }),
                ]).start(() => {
                    setHearts((prevHearts) =>
                        prevHearts.filter((heart) => heart.id !== newHeart.id)
                    );
                });

                onDoubleTap();
            });
        }
        lastTap.current = now;
    };
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / screenWidth); // Tính chỉ số ảnh hiện tại
        setCurrentIndex(index);
    };
    return (
        <View ref={containerRef} style={styles.container}>
            <FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll} // Lắng nghe sự kiện scroll
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={handleDoubleTap}>
                        <Image source={item as any} style={[styles.image, { width: screenWidth }]} />
                    </TouchableWithoutFeedback>
                )}
            />
            {images.length > 1 && (
                <View style={styles.order}>
                    <Text style={styles.orderNumber}>{currentIndex + 1}/{images.length}</Text>
                </View>
            )}
            {hearts.map(heart => (
                <Animated.View
                    key={heart.id}
                    style={{
                        position: 'absolute',
                        left: heart.x - 35, // Điều chỉnh cho trái tim nằm chính giữa vị trí chạm
                        top: heart.y - 35,
                        transform: [{ scale: heart.scale }],
                    }}
                >
                    <IconBase name="heart" library="AntDesign" size={90} color={theme.heartActive} />
                </Animated.View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        maxHeight: 300,
    },
    order: {
        position: 'absolute',
        right: 12,
        top: 18,
        borderRadius: 16,
        width: 40,
        height: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    orderNumber: {
        color: '#f2f2f2',
    },
});


export default BodyPost;