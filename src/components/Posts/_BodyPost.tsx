import { useRef, useState } from "react";
import { Animated, Image, Pressable, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import { GestureResponderEvent } from "react-native";
import IconBase from "../Icons/IconBase";

interface BodyPostProps {
    image: string;
    onDoubleTap: () => void;  
}

const BodyPost: React.FC<BodyPostProps> = ({ image, onDoubleTap }) => {
    const { theme } = useTheme();
    const lastTap = useRef<number>(0);
    const containerRef = useRef<View>(null); // Thêm ref để lấy tọa độ View
    const [hearts, setHearts] = useState<Array<{
        id: number,
        x: number,
        y: number,
        scale: Animated.Value
    }>>([]);

    const handleDoubleTap = (event: GestureResponderEvent) => {
        const now = Date.now();
        const { pageX, pageY } = event.nativeEvent;

        if (now - lastTap.current < 300) {
            // Lấy tọa độ của View chứa ảnh
            containerRef.current?.measure((x, y, width, height, pageXOffset, pageYOffset) => {
                const adjustedX = pageX - pageXOffset; // Tọa độ x trong View
                const adjustedY = pageY - pageYOffset; // Tọa độ y trong View

                // Tạo trái tim tại vị trí được tính toán
                const newHeart = {
                    id: now, // Dùng timestamp làm id
                    x: adjustedX,
                    y: adjustedY,
                    scale: new Animated.Value(0),
                };

                setHearts(prevHearts => [...prevHearts, newHeart]);

                Animated.sequence([
                    Animated.spring(newHeart.scale, {
                        toValue: 1,
                        friction: 3,
                        useNativeDriver: true,
                    }),
                    Animated.timing(newHeart.scale, {
                        toValue: 0,
                        duration: 100,
                        delay: 400,
                        useNativeDriver: true,
                    }),
                ]).start(() => {
                    // Xóa heart sau khi animation kết thúc
                    setHearts(prevHearts =>
                        prevHearts.filter(heart => heart.id !== newHeart.id)
                    );
                });

                onDoubleTap(); // Gọi hàm callback
            });
        }
        lastTap.current = now;
    };

    return (
        <TouchableWithoutFeedback onPress={handleDoubleTap}>
            <View ref={containerRef} style={styles.container}>
                <Image source={image as any} style={styles.image} />
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
                        <IconBase
                            name="heart"
                            library="AntDesign"
                            size={70}
                            color={theme.heartActive}
                        />
                    </Animated.View>
                ))}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        height: 300,
    },
});


export default BodyPost;