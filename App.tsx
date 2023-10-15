import { Text, View } from "react-native";

import { ThemeProvider } from "styled-components";

import theme from "@theme/index";
import { Loading } from "@components/Loading";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

export default function App() {
  const [fontsLoaded] = useFonts([NunitoSans_400Regular, NunitoSans_700Bold]);
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? (
        <Text>Open up App.tsx to start working on your app!</Text>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  );
}
