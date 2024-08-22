import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider } from './Cart';
import { ThemeProvider } from './Theme';
import { UserProvider } from './U';
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import UserProfileScreen from './UserProfileScreen';
import UserDetailsScreen from './UserDetailsScreen';
import AddressScreen from './AddressScreen';
import PaymentScreen from './PaymentScreen';
import COLOURS from "./colours"

const Tab = createBottomTabNavigator();

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <UserProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="menu" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="shopping-cart" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Address"
                component={AddressScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="UserDetails"
                component={UserDetailsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="person" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="account-circle" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Payment"
                component={PaymentScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="payment" color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </UserProvider>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
