import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <WebView source={require("./assets/build/index.html")}></WebView>
    </View>
  );
}
