import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import DetalhesScreen from './screens/DetalhesScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import CarrinhoScreen from './screens/CarrinhoScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Detalhes" component={DetalhesScreen} />
          <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
        </Stack.Navigator>
      </Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
