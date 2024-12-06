import {
    Feather, Entypo, Octicons, FontAwesome5,
    FontAwesome, EvilIcons, AntDesign, Foundation, MaterialIcons,
    MaterialCommunityIcons, 
} from "@expo/vector-icons";

export type IconLibrary = 'Feather' | 'Entypo' | 'Octicons' | 'FontAwesome5' |
    'FontAwesome' | 'EvilIcons' | 'AntDesign' | 'Foundation' | 'MaterialIcons' |
    'MaterialCommunityIcons';

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
};

const Images = {
    glasses: require('./../../src/assests/Img/glasses.jpg'),
    default_avatar: require('./../../src/assests/Img/default-avatar.png'),
};

export default Images;
