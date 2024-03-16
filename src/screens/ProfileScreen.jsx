import {Text, View, Image, StyleSheet, Pressable} from "react-native";
import user from "../../assets/data/user.json";

const dummy_img =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";
const bg = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";

const ProfileScreen = () => {

    const addStory = () => {
      console.warn("Add Story");
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image source={{uri: bg}} style={styles.backgroundImage} />
                <Image source={{uri: dummy_img}} style={styles.profileImage} />
            </View>
            <Text style={styles.userName}>{user.name}</Text>
            <View style={styles.actionsContainer}>
                <View style={styles.action}>
                    <Pressable onPress={addStory} style={styles.addStory} >
                        <Text style={{textAlign: "center"}}>Add to Story</Text>
                    </Pressable>
                </View>
                <View style={styles.action}></View>
                <View style={styles.action}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    imageContainer: {
        position: "relative",
        margin: 8
    },
    backgroundImage: {
        width: "100%",
        aspectRatio: 16 / 9,
        borderTopEndRadius: 36,
        borderTopStartRadius: 36,
    },
    profileImage: {
        width: 144,
        height: 144,
        borderRadius: 72,
        borderWidth: 2,
        borderColor: "white",
        position: "absolute",
        bottom: -72,
        alignSelf: "center",
    },
    userName: {
        marginTop: 64,
        fontSize: 24,
        fontWeight: "500",
        alignSelf: "center",
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
    },
    action: {
        width: "30%",
        height: 40,
        backgroundColor: "royalblue",
        borderRadius: 8,
        justifyContent: "center",
    },
    addStory: {
        borderWidth: 1,
        borderColor: "#f5f5f5",
        borderRadius: 8,
        justifyContent: "center",
        height: 40,
    },
});

export default ProfileScreen;
