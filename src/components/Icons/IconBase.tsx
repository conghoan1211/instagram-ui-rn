import React from 'react';

import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from '../Theme/ThemeContext';
import { IconLibrary, IconMap } from '../../constants/Const';

interface IConProps {
    name: string;
    library: IconLibrary;
    size?: number;
    color?: string;
}

const IconBase: React.FC<IConProps> = ({ name, library, size, color }) => {
    const { theme } = useTheme();

    const IconComponent = IconMap[library] || Feather;
    return (
        <IconComponent
            name={name as any}
            style={styles.container}
            color={color ?? theme.text}
            background={theme.background}
            size={size ?? 26}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        // fontSize: 26,
        // width: 30,
        // height: 30,
    },
});

export default IconBase;