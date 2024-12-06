import {
    Feather, Entypo, Octicons, FontAwesome5,
    FontAwesome, EvilIcons, AntDesign, Foundation, MaterialIcons
} from "@expo/vector-icons";

export type IconLibrary = 'Feather' | 'Entypo' | 'Octicons' | 'FontAwesome5' |
    'FontAwesome' | 'EvilIcons' | 'AntDesign' | 'Foundation' | 'MaterialIcons';

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
};

const Images = {
    glasses: require('./../../src/assests/Img/glasses.jpg'),
    default_avatar: require('./../../src/assests/Img/default-avatar.png'),
};

export default Images;
