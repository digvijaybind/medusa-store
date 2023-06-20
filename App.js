import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {Router, Scene, Stack} from "react-native-router-flux";
import Products from "./screens/Products";
import ProductInfo from "./screens/ProductInfo";
export default function App() {
  return (
    <View>hii there</View>
    // <Router>
    //   //{" "}
    //   <Stack key="root">
    //     // <Scene key="products" component={Products} hideNavBar />
    //     // <Scene key="ProductInfo" component={ProductInfo} hideNavBar />
    //     //{" "}
    //   </Stack>

    // </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
