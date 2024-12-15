import { StyleSheet, TouchableOpacity, View } from "react-native";
import ButtonBase from "../../components/Button/ButtonBase";
import IconBase from "../../components/Icons/IconBase";
import { Colors, globalStyles } from "../../constants/GlobalStyles";
import { useTheme } from "../../components/Theme/ThemeContext";

function ActionProfile() {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            {/* <ButtonBase title="Edit profile" width='44%' height={31} />
            <ButtonBase title="Edit profile" width='44%' height={31} />
            <TouchableOpacity
                style={[
                    styles.btnMore,
                    globalStyles.justify_align_center,
                    { backgroundColor: theme.btn_primary_bg }
                ]}>
                <IconBase name="user-plus" library="Feather" size={15} />
            </TouchableOpacity> */}

            {/* <ButtonBase title="Follow" width='49.9%' height={31} style={{backgroundColor: Colors.btnPrimary}}/> */}
            <ButtonBase title="Following" width='49.9%' height={31} />
            <ButtonBase title="Message" width='49.9%' height={31} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 5
    },
    btnMore: {
        height: 31,
        flex: 1,
        borderRadius: 8,
    },
});

export default ActionProfile;