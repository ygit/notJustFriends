import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import LikeImage from "../../assets/images/like.png";

import {useNavigation} from "@react-navigation/native";

const FeedPost = ({post}) => {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.post} onPress={() => navigation.navigate("Profile", {id: post.User.id})}>
            {/* Post Header with details about the author */}
            <View style={styles.header}>
                <Image
                    source={{ uri: post.User.image }}
                    style={styles.profileImage}
                />
                <View>
                    <Text style={styles.name}>{post.User.name}</Text>
                    <Text style={styles.subtitle}>{post.createdAt}</Text>
                </View>
                <Entypo
                    name="dots-three-horizontal"
                    size={18}
                    color="gray"
                    style={styles.icon}
                />
            </View>

            {/* Post body with description and image */}
            <Text style={styles.description}>{post.description}</Text>
            {post.image && (
                <Image
                    source={{ uri: post.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}

            {/* Post footer with likes and button */}
            <View style={styles.footer}>
                {/* Stats row */}
                <View style={styles.statsRow}>
                    <Image source={LikeImage} style={styles.likeIcon} />
                    <Text style={styles.likedBy}>
                        Elon Musk and {post.numberOfLikes} others
                    </Text>
                    <Text style={styles.shares}>{post.numberOfShares} shares</Text>
                </View>

                {/* Buttons row */}
                <View style={styles.buttonsRow}>
                    {/* Like button */}
                    <View style={styles.iconButton}>
                        <AntDesign name="like2" size={18} color="gray" />
                        <Text style={styles.iconButtonText}>Like</Text>
                    </View>

                    {/* Comment button */}
                    <View style={styles.iconButton}>
                        <FontAwesome5 name="comment-alt" size={16} color="gray" />
                        <Text style={styles.iconButtonText}>Comment</Text>
                    </View>

                    {/* Share button */}
                    <View style={styles.iconButton}>
                        <MaterialCommunityIcons
                            name="share-outline"
                            size={18}
                            color="gray"
                        />
                        <Text style={styles.iconButtonText}>Share</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    post: {
        backgroundColor: "#fff",
        marginVertical: 5,
    },

    // Header
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontWeight: "500",
    },
    subtitle: {
        color: "gray",
    },
    icon: {
        marginLeft: "auto",
    },

    // Body
    description: {
        lineHeight: 20,
        padding: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },

    // Footer
    footer: {
        paddingHorizontal: 10,
    },

    // Stats Row
    statsRow: {
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 10,
        borderColor: "lightgray",
    },
    likeIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    likedBy: {
        color: "gray",
    },
    shares: {
        color: "gray",
        marginLeft: "auto",
    },

    // Buttons Row
    buttonsRow: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    iconButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButtonText: {
        color: "gray",
        marginLeft: 5,
        fontWeight: "500",
    },
});

export default FeedPost;
