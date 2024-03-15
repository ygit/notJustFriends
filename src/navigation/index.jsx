import {NavigationContainer} from "@react-navigation/native";
import FeedScreen from "../screens/FeedScreen";
import CreatePost from "../screens/CreatePost";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Navigator = () => {

    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Feed">
              <Stack.Screen name="Feed" component={FeedScreen} />
              <Stack.Screen name="CreatePost" component={CreatePost} />
          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigator;
