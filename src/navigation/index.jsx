import {NavigationContainer} from "@react-navigation/native";
import FeedScreen from "../screens/FeedScreen";
import CreatePost from "../screens/CreatePost";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FontAwesome} from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";

const Navigator = () => {

    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Feed">
              <Stack.Screen name="Feed" component={FeedScreen} options={({ navigation }) => ({
                  headerRight: () => (
                      <FontAwesome
                          onPress={() => navigation.navigate("Profile")}
                          name="user"
                          size={24}
                          color="royalblue"
                      />
                  ),
              })} />
              <Stack.Screen name="Create Post" component={CreatePost} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigator;
