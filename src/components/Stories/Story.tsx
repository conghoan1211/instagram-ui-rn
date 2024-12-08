import { FlatList, StyleSheet, View } from "react-native";
import glasses from './../../assests/Img/glasses.jpg';
import StoryItem from "./StoryItem";

const tokenid = '1';

const DATA = [
    { id: '1', url: glasses, name: 'sontungmtp', online: true, hasStory: false, readStory: true },
    { id: '2', url: glasses, name: 'rosie_are_roses', online: true, hasStory: true, readStory: true },
    { id: '3', url: glasses, name: 'sooyaaa__', online: false, hasStory: true, readStory: false },
    { id: '4', url: glasses, name: '_hoanpc.03', online: true, hasStory: true, readStory: false },
    { id: '5', url: undefined, name: 'jennierubyjane', online: true, hasStory: true, readStory: false },
    { id: '6', url: glasses, name: 'lalalalisa_m', online: true, hasStory: true, readStory: false },

];
const Story = () => {
    return (
        <FlatList showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <StoryItem url={item.url}
                    hasStory={item.hasStory}
                    readStory={item.readStory}
                    online={item.online}
                    me={item.id === tokenid}
                    name={item.name}
                />}
            style={styles.list}>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        paddingVertical: 4,
        height: 126,
        maxHeight: 126,
    }
});
export default Story;