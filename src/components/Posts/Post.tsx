import { View } from "react-native";
import BodyPost from "./_BodyPost";
import HeaderPost from "./_HeaderPost";
import FooterPost from "./_FooterPost";

function Post() {
    return (
        <View>
            <HeaderPost/>
            <BodyPost/>
            <FooterPost/>
        </View>
    );
}

export default Post;