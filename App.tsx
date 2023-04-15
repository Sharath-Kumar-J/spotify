
import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import SpotifyScreen from './component/Spotify';
import emailinfo from './component/Emailinfo';
import spotifyinfo from './component/spotifyinfo';
import Whatsapp from './component/Whatsapp';
import Counters from './component/Counter';
import Whatsappstatus from './component/WhatsappStatus';
import Assessmenthome from'./component/assessmenthome';
import Assessmentdata from './component/Assessdata';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name=" HomeScreen " component={Home} />
        <Stack.Screen name=" Spotify" component={SpotifyScreen} />
        <Stack.Screen name=" Emailinform" component={emailinfo} />
        <Stack.Screen name=" Spotifyinform" component={spotifyinfo} />
        <Stack.Screen name=" Whatsappscreen " component={Whatsapp} />
        <Stack.Screen name=" Counterscreen " component={Counters} />
        <Stack.Screen name=" Statusscreen " component={Whatsappstatus} />
        <Stack.Screen name=" Assesshomescreen " component={Assessmenthome} />
        <Stack.Screen name=" Assessdatascreen " component={Assessmentdata} />

      </Stack.Navigator>

    </NavigationContainer>


  );
};

export default App;