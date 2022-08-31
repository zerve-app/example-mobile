import React from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBanner } from "./zerve/MyStore";

function Home() {
  const { data, isLoading } = useBanner({
    onError: (err) => alert(err),
  });
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : null}
      <Text>{data}</Text>
    </View>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <Home />
    </QueryClientProvider>
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
