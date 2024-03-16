import {FlatList, Pressable, Text, StyleSheet, Image} from "react-native";
import posts from "../../assets/data/posts.json";
import FeedPost from "../components/FeedPost";
import {useNavigation} from "@react-navigation/native";
import {Entypo} from "@expo/vector-icons";

const img =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";
const FeedScreen = () => {

    const navigation = useNavigation();

    const createPost = () => {
        navigation.navigate("Create Post");
    }

    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => <FeedPost post={item} />}
            ListHeaderComponent={() => (
                <Pressable onPress={createPost} style={styles.header}>
                    <Image source={{ uri: img }} style={styles.image} />
                    <Text style={styles.text}>What's on your mind?</Text>
                    <Entypo
                        name="images"
                        size={24}
                        color="limegreen"
                        style={styles.icon}
                    />
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        padding: 15,
        alignItems: "center",
        flexDirection: "row",
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    text: {
        paddingHorizontal: 10,
        color: "black",
    },
    icon: {
        position: "absolute",
        right: 10,
    },
});

export default FeedScreen;
