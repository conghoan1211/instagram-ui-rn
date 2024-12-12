import {
    Feather, Entypo, Octicons, FontAwesome5,
    FontAwesome, EvilIcons, AntDesign, Foundation, MaterialIcons,
    MaterialCommunityIcons, FontAwesome6, SimpleLineIcons, Ionicons
} from "@expo/vector-icons";

export type IconLibrary = 'Feather' | 'Entypo' | 'Octicons' | 'FontAwesome5' |
    'FontAwesome' | 'EvilIcons' | 'AntDesign' | 'Foundation' | 'MaterialIcons' |
    'MaterialCommunityIcons' | 'FontAwesome6' | 'SimpleLineIcons' | 'Ionicons';

export const IconMap: Record<IconLibrary, any> = {
    Feather,
    Entypo,
    Octicons,
    FontAwesome5,
    FontAwesome,
    EvilIcons,
    AntDesign,
    Foundation,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome6,
    SimpleLineIcons,
    Ionicons,
};

const Images = {
    glasses: require('./../../src/assests/Img/glasses.jpg'),
    default_avatar: require('./../../src/assests/Img/default-avatar.png'),
    avt: require('./../../src/assests/Img/avt.jpg'),

};

export default Images;
