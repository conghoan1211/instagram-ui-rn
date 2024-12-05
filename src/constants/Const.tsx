
import {
    Feather, Entypo, Octicons, FontAwesome5,
    FontAwesome, EvilIcons, AntDesign
} from "@expo/vector-icons";

export type IconLibrary = 'Feather' | 'Entypo' | 'Octicons' | 'FontAwesome5' |
    'FontAwesome' | 'EvilIcons' | 'AntDesign';

export const IconMap: Record<IconLibrary, any> = {
    Feather,
    Entypo,
    Octicons,
    FontAwesome5,
    FontAwesome,
    EvilIcons,
    AntDesign,
};

const Images = {
    glasses: require('./../../src/assests/Images/glasses.jpg'),
    default_avatar: require('./../../src/assests/Images/default-avatar.png'),
};

export default Images;
