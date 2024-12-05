import { FlatList, StyleSheet, View } from "react-native";
import glasses from './../../assests/Images/glasses.jpg';
import StoryItem from "./StoryItem";

const tokenid = '1';

const DATA = [
    { id: '1', url: glasses, online: true, hasStory: false, readStory: true },
    { id: '2', url: glasses, online: true, hasStory: true, readStory: true },
    { id: '3', url: glasses, online: false, hasStory: true, readStory: false },
    { id: '4', url: glasses, online: true, hasStory: true, readStory: false },
    { id: '5', url: glasses, online: true, hasStory: true, readStory: false },
    { id: '6', url: glasses, online: true, hasStory: true, readStory: false },

];
const Story = () => {
    return (
        <FlatList
            horizontal
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <StoryItem url={item.url}
                    hasStory={item.hasStory}
                    readStory={item.readStory}
                    online={item.online}
                    me={item.id === tokenid ? true : false}
                />}
            style={styles.list}>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        paddingVertical: 4,
    }
});
export default Story;