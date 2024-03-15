import {StyleSheet, Text, SafeAreaView, View, Image, TextInput, Button} from "react-native";
import {useState} from "react";
import {Entypo} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const user = {
    id: "u1",
    image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Yogesh Singh",
};
const CreatePost = () => {

    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

    const onPost = () => {
        console.warn(`Post: ${description}`);
        setDescription("");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: user.image }} style={styles.userImage} />
                <Text style={styles.userName}>{user.name}</Text>
                <Entypo
                    name="images"
                    style={styles.imageIcon}
                    size={24}
                    color="limegreen"
                    onPress={pickImage}
                />
            </View>
            <TextInput
                style={styles.input}
                placeholder={"What's on your mind?"}
                value={description}
                onChangeText={setDescription}
                multiline />
            <Image source={{ uri: image }} style={styles.postImage} />
            <View style={styles.buttonContainer}>
                <Button title={"Post"} onPress={onPost}  />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        width: "100%",
    },
    header: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        padding: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    postImage: {
        width: "100%",
       aspectRatio: 4/3,
    },
    imageIcon: {
        marginLeft: "auto",
        marginRight: 10,
    },
    userName: {
        marginLeft: 10,
        fontWeight: "bold",
    },
    input: {
        fontSize: 18,
        padding: 10,
    },
    buttonContainer: {
        width: "100%",
        padding: 10,
        marginBottom: "auto",
    },
});

export default CreatePost;
